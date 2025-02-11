import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

const AetheriaLogo = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22H22L12 2Z" stroke="#4B0082" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z"
      stroke="#4B0082"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function AetheriaNewsletterSignup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6E6FA] to-[#D0CFDF] p-4">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-lg bg-white rounded-lg">
        <div className="text-center">
          <AetheriaLogo />
          <h1 className="text-2xl font-bold text-gray-800 mt-4">Join the Aetheria Community</h1>
          <p className="text-gray-600 mt-2">
            Get inspired by ethical living and discover curated products that align with your values.
          </p>
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign up with Google
          </Button>
          <Button variant="outline" className="w-full">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
                fill="#1877F2"
              />
            </svg>
            Sign up with Facebook
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
          </div>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="Enter your email address" required />
          </div>
          <Button type="submit" className="w-full bg-[#4B0082] hover:bg-[#3A0066] text-white">
            Subscribe Now
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          {" • "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          {" • "}
          <a href="#" className="hover:underline">
            Help/FAQ
          </a>
        </div>

        <div className="text-center text-xs text-gray-400">
          We respect your privacy. Your information is safe with us.
        </div>
      </Card>
    </div>
  )
}

