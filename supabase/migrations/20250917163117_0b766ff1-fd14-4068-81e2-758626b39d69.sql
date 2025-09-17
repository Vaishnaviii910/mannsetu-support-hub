-- Update profiles table to handle all user types properly
ALTER TABLE public.profiles ALTER COLUMN role SET DEFAULT 'student'::user_role;

-- Add peer support forums table
CREATE TABLE public.forums (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  institute_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add forum posts table
CREATE TABLE public.forum_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  forum_id UUID NOT NULL,
  student_id UUID NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add forum replies table
CREATE TABLE public.forum_replies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL,
  student_id UUID NOT NULL,
  content TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on forum tables
ALTER TABLE public.forums ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;

-- RLS policies for forums (institute-scoped)
CREATE POLICY "Students can view forums from their institute" 
ON public.forums 
FOR SELECT 
USING (institute_id = get_user_institute_id() AND get_user_role() = 'student'::user_role);

CREATE POLICY "Institutes can manage their forums" 
ON public.forums 
FOR ALL 
USING (institute_id = get_user_institute_id() AND get_user_role() = 'institute'::user_role);

-- RLS policies for forum posts
CREATE POLICY "Students can view posts in their institute forums" 
ON public.forum_posts 
FOR SELECT 
USING (forum_id IN (SELECT id FROM forums WHERE institute_id = get_user_institute_id()) AND get_user_role() = 'student'::user_role);

CREATE POLICY "Students can create posts in their institute forums" 
ON public.forum_posts 
FOR INSERT 
WITH CHECK (student_id IN (SELECT id FROM students WHERE user_id = auth.uid()) AND forum_id IN (SELECT id FROM forums WHERE institute_id = get_user_institute_id()));

CREATE POLICY "Students can update their own posts" 
ON public.forum_posts 
FOR UPDATE 
USING (student_id IN (SELECT id FROM students WHERE user_id = auth.uid()));

-- RLS policies for forum replies
CREATE POLICY "Students can view replies in their institute forums" 
ON public.forum_replies 
FOR SELECT 
USING (post_id IN (SELECT id FROM forum_posts WHERE forum_id IN (SELECT id FROM forums WHERE institute_id = get_user_institute_id())) AND get_user_role() = 'student'::user_role);

CREATE POLICY "Students can create replies in their institute forums" 
ON public.forum_replies 
FOR INSERT 
WITH CHECK (student_id IN (SELECT id FROM students WHERE user_id = auth.uid()) AND post_id IN (SELECT id FROM forum_posts WHERE forum_id IN (SELECT id FROM forums WHERE institute_id = get_user_institute_id())));

CREATE POLICY "Students can update their own replies" 
ON public.forum_replies 
FOR UPDATE 
USING (student_id IN (SELECT id FROM students WHERE user_id = auth.uid()));

-- Add triggers for updated_at
CREATE TRIGGER update_forums_updated_at
BEFORE UPDATE ON public.forums
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_forum_posts_updated_at
BEFORE UPDATE ON public.forum_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_forum_replies_updated_at
BEFORE UPDATE ON public.forum_replies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();