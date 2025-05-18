export default function HomePage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-muted-foreground">Your personal space for notes and blogs.</p>
      </div>

      <div className="grid gap-4">
        <div className="rounded-lg border bg-card p-4">
          <h2 className="font-semibold mb-2">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md bg-muted p-3">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground">Total Notes</div>
            </div>
            <div className="rounded-md bg-muted p-3">
              <div className="text-2xl font-bold">8</div>
              <div className="text-xs text-muted-foreground">Total Blogs</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-4">
          <h2 className="font-semibold mb-2">Recent Activity</h2>
          <div className="space-y-2">
            <div className="text-sm">
              <div className="font-medium">Meeting Notes Updated</div>
              <div className="text-xs text-muted-foreground">2 hours ago</div>
            </div>
            <div className="text-sm">
              <div className="font-medium">New Blog Post Created</div>
              <div className="text-xs text-muted-foreground">5 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

