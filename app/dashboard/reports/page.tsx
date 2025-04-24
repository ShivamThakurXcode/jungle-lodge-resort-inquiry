"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

// Color palette for charts
const CHART_COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

// Sample data for bookings
const bookingBySiteData = [
  { name: "Rivertern Lodge Bhadra", value: 42 },
  { name: "Kali Adventure Camp", value: 38 },
  { name: "Bandipur Safari", value: 28 },
  { name: "Kabini Lake View", value: 22 },
  { name: "Coorg Plantation Stay", value: 12 },
];

// Sample data for recent bookings
const recentBookings = [
  {
    id: "BK001",
    customer: "Rajesh Kumar",
    email: "rajesh.kumar@gmail.com",
    site: "Rivertern Lodge Bhadra",
    date: "2024-04-20",
    status: "confirmed",
  },
  {
    id: "BK002",
    customer: "Priya Sharma",
    email: "priya.sharma@yahoo.com",
    site: "Kali Adventure Camp",
    date: "2024-04-19",
    status: "pending",
  },
  {
    id: "BK003",
    customer: "Arun Patel",
    email: "arun.patel@hotmail.com",
    site: "Bandipur Safari",
    date: "2024-04-18",
    status: "confirmed",
  },
  {
    id: "BK004",
    customer: "Meera Singh",
    email: "meera.singh@gmail.com",
    site: "Kabini Lake View",
    date: "2024-04-17",
    status: "confirmed",
  },
  {
    id: "BK005",
    customer: "Vikram Reddy",
    email: "vikram.reddy@outlook.com",
    site: "Coorg Plantation Stay",
    date: "2024-04-16",
    status: "pending",
  },
];

// Sample data for recent inquiries
const recentInquiries = [
  {
    id: "INQ001",
    customer: "Ananya Gupta",
    email: "ananya.gupta@gmail.com",
    site: "Rivertern Lodge Bhadra",
    date: "2024-04-20",
    status: "new",
  },
  {
    id: "INQ002",
    customer: "Rahul Verma",
    email: "rahul.verma@yahoo.com",
    site: "Kali Adventure Camp",
    date: "2024-04-19",
    status: "in_progress",
  },
  {
    id: "INQ003",
    customer: "Neha Kapoor",
    email: "neha.kapoor@hotmail.com",
    site: "Bandipur Safari",
    date: "2024-04-18",
    status: "new",
  },
  {
    id: "INQ004",
    customer: "Suresh Iyer",
    email: "suresh.iyer@gmail.com",
    site: "Kabini Lake View",
    date: "2024-04-17",
    status: "in_progress",
  },
  {
    id: "INQ005",
    customer: "Deepika Nair",
    email: "deepika.nair@outlook.com",
    site: "Coorg Plantation Stay",
    date: "2024-04-16",
    status: "new",
  },
];

const bookingTrendsData = [
  { name: "Jan", bookings: 120 },
  { name: "Feb", bookings: 150 },
  { name: "Mar", bookings: 180 },
  { name: "Apr", bookings: 210 },
  { name: "May", bookings: 190 },
  { name: "Jun", bookings: 220 },
  { name: "Jul", bookings: 250 },
  { name: "Aug", bookings: 230 },
  { name: "Sep", bookings: 200 },
  { name: "Oct", bookings: 240 },
  { name: "Nov", bookings: 260 },
  { name: "Dec", bookings: 300 },
];

// Sample data for inquiries
const inquiryBySiteData = [
  { name: "Kali Adventure Camp", inquiries: 78 },
  { name: "Rivertern Lodge Bhadra", inquiries: 65 },
  { name: "Bandipur Safari", inquiries: 54 },
  { name: "Kabini Lake View", inquiries: 48 },
  { name: "Coorg Plantation Stay", inquiries: 42 },
];

const inquiryTrendsData = [
  { name: "Jan", inquiries: 180 },
  { name: "Feb", inquiries: 210 },
  { name: "Mar", inquiries: 240 },
  { name: "Apr", inquiries: 270 },
  { name: "May", inquiries: 250 },
  { name: "Jun", inquiries: 280 },
  { name: "Jul", inquiries: 310 },
  { name: "Aug", inquiries: 290 },
  { name: "Sep", inquiries: 260 },
  { name: "Oct", inquiries: 300 },
  { name: "Nov", inquiries: 320 },
  { name: "Dec", inquiries: 360 },
];

// Sample data for conversion
const conversionBySiteData = [
  { name: "Rivertern Lodge Bhadra", rate: 53.8 },
  { name: "Kali Adventure Camp", rate: 48.7 },
  { name: "Kabini Lake View", rate: 45.8 },
  { name: "Coorg Plantation Stay", rate: 42.3 },
  { name: "Bandipur Safari", rate: 37.8 },
];

const conversionTrendsData = [
  { name: "Jan", rate: 42.5 },
  { name: "Feb", rate: 44.8 },
  { name: "Mar", rate: 46.2 },
  { name: "Apr", rate: 47.5 },
  { name: "May", rate: 48.1 },
  { name: "Jun", rate: 49.3 },
  { name: "Jul", rate: 50.2 },
  { name: "Aug", rate: 51.0 },
  { name: "Sep", rate: 49.8 },
  { name: "Oct", rate: 51.5 },
  { name: "Nov", rate: 52.3 },
  { name: "Dec", rate: 53.0 },
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Analyze your booking and inquiry data
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Tabs defaultValue="bookings" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
              <TabsTrigger value="conversion">Conversion</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <Select defaultValue="month">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Last 7 days</SelectItem>
                  <SelectItem value="month">Last 30 days</SelectItem>
                  <SelectItem value="quarter">Last 90 days</SelectItem>
                  <SelectItem value="year">Last 12 months</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">Export</Button>
            </div>
          </div>

          <TabsContent value="bookings" className="space-y-4 mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Bookings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Average Group Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2</div>
                  <p className="text-xs text-muted-foreground">
                    +0.3 from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Average Stay
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6.5 days</div>
                  <p className="text-xs text-muted-foreground">
                    +0.8 from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Top Site
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    Rivertern lodge bhadra
                  </div>
                  <p className="text-xs text-muted-foreground">
                    42 bookings (29.6%)
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Bookings by Site</CardTitle>
                <CardDescription>
                  Distribution of bookings across all sites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={bookingBySiteData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent, value }) =>
                          `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                        }
                      >
                        {bookingBySiteData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={CHART_COLORS[index % CHART_COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Booking Trends</CardTitle>
                <CardDescription>
                  Monthly booking trends over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={bookingTrendsData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="bookings"
                        stroke={CHART_COLORS[0]}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inquiries" className="space-y-4 mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">287</div>
                  <p className="text-xs text-muted-foreground">
                    +18% from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Response Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">94.8%</div>
                  <p className="text-xs text-muted-foreground">
                    +2.3% from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avg. Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2 hours</div>
                  <p className="text-xs text-muted-foreground">
                    -0.5 from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Top Site
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Kali Adventure Camp</div>
                  <p className="text-xs text-muted-foreground">
                    78 inquiries (27.2%)
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Inquiries by Site</CardTitle>
                <CardDescription>
                  Distribution of inquiries across all sites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={inquiryBySiteData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="inquiries" fill={CHART_COLORS[1]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inquiry Trends</CardTitle>
                <CardDescription>
                  Monthly inquiry trends over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={inquiryTrendsData}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="inquiries"
                        stroke={CHART_COLORS[2]}
                        fill={CHART_COLORS[2]}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-4 mt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Overall Conversion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">49.5%</div>
                  <p className="text-xs text-muted-foreground">
                    +2.5% from previous period
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Best Performing Site
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    Rivertern lodge bhadra
                  </div>
                  <p className="text-xs text-muted-foreground">
                    53.8% conversion rate
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Lowest Performing Site
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Bandipur Safari</div>
                  <p className="text-xs text-muted-foreground">
                    37.8% conversion rate
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avg. Time to Convert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2 days</div>
                  <p className="text-xs text-muted-foreground">
                    -0.5 from previous period
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Rate by Site</CardTitle>
                <CardDescription>
                  Comparison of conversion rates across all sites
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={conversionBySiteData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis unit="%" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="rate" fill={CHART_COLORS[3]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Conversion Trends</CardTitle>
                <CardDescription>
                  Monthly conversion trends over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={conversionTrendsData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis unit="%" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="rate"
                        stroke={CHART_COLORS[4]}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
