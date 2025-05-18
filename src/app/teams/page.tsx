import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

export default function TeamsPage() {
  const teams = [
    {
      name: "Design Team",
      description: "UI/UX and visual design team",
      members: [
        { name: "Sarah Wilson", role: "Lead Designer", image: "/placeholder.svg" },
        { name: "Mike Chen", role: "UI Designer", image: "/placeholder.svg" },
      ],
    },
    {
      name: "Development Team",
      description: "Frontend and backend development",
      members: [
        { name: "John Doe", role: "Tech Lead", image: "/placeholder.svg" },
        { name: "Emma Smith", role: "Frontend Dev", image: "/placeholder.svg" },
      ],
    },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Teams</h1>
          <p className="text-muted-foreground">Manage your team members and their roles.</p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          New Team
        </Button>
      </div>

      <div className="grid gap-4">
        {teams.map((team) => (
          <Card key={team.name}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
              <CardDescription>{team.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {team.members.map((member) => (
                  <div key={member.name} className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={member.image} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{member.name}</div>
                      <div className="text-sm text-muted-foreground">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

