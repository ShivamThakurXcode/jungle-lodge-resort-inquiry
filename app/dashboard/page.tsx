import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  Home,
  MessageSquare,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your Jungle & Lodge admin portal
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Bookings
            </CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Inquiries
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">287</div>
            <p className="text-xs text-muted-foreground">
              +18% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">49.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.5% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sites</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              All sites reporting data
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
            <TabsTrigger value="sites">Site Performance</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </div>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>
                You have received 12 new bookings today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>
                          {booking.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{booking.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <Badge variant="outline">{booking.site}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {booking.date}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/bookings">View All Bookings</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Inquiries</CardTitle>
              <CardDescription>
                You have received 18 new inquiries today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>
                          {inquiry.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{inquiry.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {inquiry.email}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <Badge variant="outline">{inquiry.site}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {inquiry.date}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/inquiries">View All Inquiries</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="sites">
          <Card>
            <CardHeader>
              <CardTitle>Site Performance</CardTitle>
              <CardDescription>
                Overview of all 12 websites in your network
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sitePerformance.map((site) => (
                  <div
                    key={site.id}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-md bg-green-100 p-2">
                        <BookOpen className="h-4 w-4 text-green-700" />
                      </div>
                      <div>
                        <p className="font-medium">{site.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {site.url}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Bookings
                        </p>
                        <p className="font-medium">{site.bookings}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Inquiries
                        </p>
                        <p className="font-medium">{site.inquiries}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Conversion
                        </p>
                        <p className="font-medium">{site.conversion}%</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

const recentBookings = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@gmail.com",
    site: "Rivertern lodge bhadra",
    date: "Today, 10:30 AM",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@yahoo.com",
    site: "Kabini River Resort",
    date: "Today, 9:15 AM",
  },
  {
    id: 3,
    name: "Arun Patel",
    email: "arun.patel@hotmail.com",
    site: "Kali Adventure Camp",
    date: "Yesterday, 4:45 PM",
  },
  {
    id: 4,
    name: "Meera Singh",
    email: "meera.singh@gmail.com",
    site: "Dandeli",
    date: "Yesterday, 2:30 PM",
  },
];

const recentInquiries = [
  {
    id: 1,
    name: "Ananya Gupta",
    email: "ananya.gupta@gmail.com",
    site: "Kali Adventure Camp",
    date: "Today, 11:45 AM",
  },
  {
    id: 2,
    name: "Rahul Verma",
    email: "rahul.verma@yahoo.com",
    site: "Rivertern lodge bhadra",
    date: "Today, 10:20 AM",
  },
  {
    id: 3,
    name: "Neha Kapoor",
    email: "neha.kapoor@hotmail.com",
    site: "Kabini River Resort",
    date: "Today, 8:30 AM",
  },
  {
    id: 4,
    name: "Suresh Iyer",
    email: "suresh.iyer@gmail.com",
    site: "Dandeli",
    date: "Yesterday, 5:15 PM",
  },
];

const sitePerformance = [
  {
    id: 1,
    name: "Rivertern lodge bhadra",
    url: "riverternlodge.com",
    bookings: 42,
    inquiries: 78,
    conversion: 53.8,
  },
  {
    id: 2,
    name: "Kabini River Resort",
    url: "kabiniresort.com",
    bookings: 36,
    inquiries: 65,
    conversion: 55.4,
  },
  {
    id: 3,
    name: "Kali Adventure Camp",
    url: "kaliadventure.com",
    bookings: 28,
    inquiries: 59,
    conversion: 47.5,
  },
  {
    id: 4,
    name: "Dandeli",
    url: "dandelilodge.com",
    bookings: 22,
    inquiries: 48,
    conversion: 45.8,
  },
  {
    id: 5,
    name: "Bandipur Safari",
    url: "bandipursafari.com",
    bookings: 14,
    inquiries: 37,
    conversion: 37.8,
  },
];
