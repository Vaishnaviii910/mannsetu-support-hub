import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [userType, setUserType] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    email: "",
    phone: "",
    instituteAddress: "",
    ugcCode: "",
    selectedInstitute: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userType) {
      toast({
        title: "Please select user type",
        description: "You must select whether you are a Student or Institute admin.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both password fields match.",
        variant: "destructive",
      });
      return;
    }

    // Simulate signup - In real app, this would be handled by Supabase
    toast({
      title: "Account created successfully!",
      description: userType === "student" ? 
        "Please complete the screening forms to access your dashboard." :
        "Your institute account has been created. You can now manage counselors and view analytics.",
    });

    // Navigate based on user type
    if (userType === "student") {
      navigate("/screening-forms");
    } else {
      navigate("/institute-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <Heart className="h-8 w-8 text-primary mr-2" />
          <h1 className="text-2xl font-bold text-primary">MannSetu</h1>
        </div>
        
        <Card className="border-0 shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader className="space-y-4">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-2">
                <Link to="/"><ArrowLeft className="h-4 w-4" /></Link>
              </Button>
              <CardTitle className="text-2xl">Create Account</CardTitle>
            </div>
            <CardDescription>
              Join MannSetu to access comprehensive mental health support services.
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="userType">I am a</Label>
                <Select value={userType} onValueChange={setUserType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="institute">Institute Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {userType === "student" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="rollNo">Roll Number</Label>
                    <Input
                      id="rollNo"
                      value={formData.rollNo}
                      onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                      placeholder="Enter your roll number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="selectedInstitute">Select Institute</Label>
                    <Select value={formData.selectedInstitute} onValueChange={(value) => setFormData({ ...formData, selectedInstitute: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose your institute" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="iit-delhi">IIT Delhi</SelectItem>
                        <SelectItem value="du-north">Delhi University - North Campus</SelectItem>
                        <SelectItem value="jnu">Jawaharlal Nehru University</SelectItem>
                        <SelectItem value="other">Other Institute</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {userType === "institute" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="instituteAddress">Institute Address</Label>
                    <Input
                      id="instituteAddress"
                      value={formData.instituteAddress}
                      onChange={(e) => setFormData({ ...formData, instituteAddress: e.target.value })}
                      placeholder="Enter institute address"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ugcCode">UGC Code</Label>
                    <Input
                      id="ugcCode"
                      value={formData.ugcCode}
                      onChange={(e) => setFormData({ ...formData, ugcCode: e.target.value })}
                      placeholder="Enter UGC recognition code"
                      required
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a strong password"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" variant="hero">
                Create Account
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline">
                  Sign in here
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Signup;