import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    "use server";
    // This is a placeholder for actual authentication logic
    // In a real app, you would validate credentials against your database
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Simple validation
    if (email === "admin@gmail.com" && password === "admin") {
      redirect("/dashboard");
    }

    // In a real app, you would handle authentication errors
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">Jungle & Lodge</h1>
          <p className="text-green-600">Admin Portal</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@gmail.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="admin"
                  type="password"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
