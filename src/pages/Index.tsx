import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const Index = () => {
  const { toast } = useToast()

  const handleClick = () => {
    toast({
      title: "Hello!",
      description: "This is a sample toast notification.",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Welcome to Your App
            </h1>
            <p className="text-xl text-muted-foreground">
              This is a starter template built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          <div className="space-y-4">
            <Button onClick={handleClick} size="lg">
              Try Toast Notification
            </Button>
            <p className="text-sm text-muted-foreground">
              Click the button above to test the toast system
            </p>
          </div>

          <Card className="text-left">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Edit src/pages/Index.tsx to customize this page
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">What's included:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React 19 with TypeScript</li>
                  <li>• Tailwind CSS v4 for styling</li>
                  <li>• shadcn/ui components</li>
                  <li>• React Router for navigation</li>
                  <li>• TanStack Query for state management</li>
                  <li>• Toast notifications</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Next steps:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Add your own pages in src/pages/</li>
                  <li>• Create components in src/components/</li>
                  <li>• Add API calls with TanStack Query</li>
                  <li>• Customize the design system</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Index