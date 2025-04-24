"use client";

import { useState } from "react";
import { Calendar, Download, Filter, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function BookingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [siteFilter, setSiteFilter] = useState("all");

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSite = siteFilter === "all" || booking.site === siteFilter;

    return matchesSearch && matchesSite;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
        <p className="text-muted-foreground">
          Manage all your booking requests in one place
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>All Bookings</CardTitle>
              <CardDescription>
                You have a total of {bookings.length} bookings
              </CardDescription>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Date Range
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4" align="end">
                  <div className="grid gap-2">
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <div className="grid gap-1">
                          <label htmlFor="from" className="text-sm font-medium">
                            From
                          </label>
                          <Input id="from" type="date" className="w-[150px]" />
                        </div>
                        <div className="grid gap-1">
                          <label htmlFor="to" className="text-sm font-medium">
                            To
                          </label>
                          <Input id="to" type="date" className="w-[150px]" />
                        </div>
                      </div>
                    </div>
                    <Button size="sm">Apply Filter</Button>
                  </div>
                </PopoverContent>
              </Popover>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export CSV
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search bookings..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={siteFilter} onValueChange={setSiteFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by site" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sites</SelectItem>
                    <SelectItem value="Rivertern lodge bhadra">
                      Rivertern lodge bhadra
                    </SelectItem>
                    <SelectItem value="Kabini River Resort">
                      Kabini River Resort
                    </SelectItem>
                    <SelectItem value="Kali Adventure  Camp">
                      Kali Adventure Camp
                    </SelectItem>
                    <SelectItem value="Dandeli">Dandeli</SelectItem>
                    <SelectItem value="Bandipur Safari">
                      Bandipur Safari
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Guest</TableHead>
                    <TableHead>Site</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead>People</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>
                              {booking.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{booking.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {booking.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{booking.site}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{booking.arrival}</div>
                        <div className="text-sm text-muted-foreground">
                          to {booking.departure}
                        </div>
                      </TableCell>
                      <TableCell>{booking.people}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            booking.status === "Confirmed"
                              ? "default"
                              : booking.status === "Pending"
                              ? "outline"
                              : "secondary"
                          }
                        >
                          {booking.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const bookings = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@gmail.com",
    site: "Rivertern lodge bhadra",
    arrival: "May 15, 2025",
    departure: "May 22, 2025",
    people: 2,
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@yahoo.com",
    site: "Kabini River Resort",
    arrival: "May 18, 2025",
    departure: "May 25, 2025",
    people: 4,
    status: "Pending",
  },
  {
    id: 3,
    name: "Arun Patel",
    email: "arun.patel@hotmail.com",
    site: "Kali Adventure Camp",
    arrival: "June 1, 2025",
    departure: "June 8, 2025",
    people: 2,
    status: "Confirmed",
  },
  {
    id: 4,
    name: "Meera Singh",
    email: "meera.singh@gmail.com",
    site: "Dandeli",
    arrival: "June 5, 2025",
    departure: "June 12, 2025",
    people: 3,
    status: "Confirmed",
  },
  {
    id: 5,
    name: "Vikram Reddy",
    email: "vikram.reddy@outlook.com",
    site: "Bandipur Safari",
    arrival: "June 10, 2025",
    departure: "June 17, 2025",
    people: 2,
    status: "Pending",
  },
  {
    id: 6,
    name: "Ananya Gupta",
    email: "ananya.gupta@gmail.com",
    site: "Rivertern lodge bhadra",
    arrival: "June 15, 2025",
    departure: "June 22, 2025",
    people: 4,
    status: "Confirmed",
  },
  {
    id: 7,
    name: "Rahul Verma",
    email: "rahul.verma@yahoo.com",
    site: "Kabini River Resort",
    arrival: "June 20, 2025",
    departure: "June 27, 2025",
    people: 2,
    status: "Pending",
  },
  {
    id: 8,
    name: "Neha Kapoor",
    email: "neha.kapoor@hotmail.com",
    site: "Kali Adventure Camp",
    arrival: "July 1, 2025",
    departure: "July 8, 2025",
    people: 3,
    status: "Confirmed",
  },
];
