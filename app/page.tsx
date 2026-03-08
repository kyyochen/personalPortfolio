import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:pt-32 md:p-24 gap-16">
      
      {/* Hero Section - Lifted slightly with Method 1 */}
      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Kyle Chen
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-medium">
          Software Development Engineer @ Amazon | CS @ Georgia Tech
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild variant="default">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://github.com/kyyochen" target="_blank">GitHub</Link>
          </Button>
        </div>
      </div>

      {/* Bento*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        
        {/* Internships -  */}
        <Link href="/internships" className="md:col-span-2 group">
          <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Work Experience</CardTitle>
                  <CardDescription>Amazon SDE & Garmin Engineering</CardDescription>
                </div>
                <span className="text-xs font-mono bg-muted px-2 py-1 rounded">Resume</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Professional Experiences
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* About Me */}
        <Link href="/about" className="group">
          <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription>:3</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Projects */}
        <Link href="/projects" className="group">
          <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>p1, p2, p3, and more</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Check out my side projects!
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Research / Skills - Spans remaining 2 columns */}
        <Link href="/research" className="md:col-span-2 group">
          <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg">
            <CardHeader>
              <CardTitle>Research & Tech Stack</CardTitle>
              <CardDescription>PopSignAI & Specialized Skills</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2 flex-wrap">
              {["Python", "TypeScript", "AWS", "Kubernetes", "TensorFlow", "PostgreSQL"].map((skill) => (
                <span key={skill} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </CardContent>
          </Card>
        </Link>

      </div>

      {/* Footer-style Signature */}
      <footer className="mt-auto pt-16 text-sm text-muted-foreground font-mono">
        © 2026 / Built with Next.js & Shadcn
      </footer>

    </main>
  );
}