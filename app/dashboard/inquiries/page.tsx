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

export default function InquiriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [siteFilter, setSiteFilter] = useState("all");

  const filteredInquiries = inquiries.filter((inquiry) => {
    const matchesSearch =
      inquiry.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inquiry.message.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSite = siteFilter === "all" || inquiry.site === siteFilter;

    return matchesSearch && matchesSite;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Inquiries</h1>
        <p className="text-muted-foreground">
          Manage all your customer inquiries in one place
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>All Inquiries</CardTitle>
              <CardDescription>
                You have a total of {inquiries.length} inquiries
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
                  placeholder="Search inquiries..."
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
                    <TableHead>Contact</TableHead>
                    <TableHead>Site</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>
                              {inquiry.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{inquiry.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {inquiry.email}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{inquiry.site}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-[300px] truncate">
                          {inquiry.message}
                        </div>
                      </TableCell>
                      <TableCell>{inquiry.date}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            inquiry.status === "Responded"
                              ? "default"
                              : inquiry.status === "New"
                              ? "outline"
                              : "secondary"
                          }
                        >
                          {inquiry.status}
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

const inquiries = [
  {
    id: 1,
    name: "Ananya Gupta",
    email: "ananya.gupta@gmail.com",
    site: "Kali Adventure Camp",
    message:
      "I'm interested in booking a tour for my family of 4. Do you offer any special packages for children?",
    date: "May 10, 2025",
    status: "New",
  },
  {
    id: 2,
    name: "Rahul Verma",
    email: "rahul.verma@yahoo.com",
    site: "Rivertern lodge bhadra",
    message:
      "What's the best time of year to visit? I'm planning a trip for bird watching.",
    date: "May 12, 2025",
    status: "Responded",
  },
  {
    id: 3,
    name: "Neha Kapoor",
    email: "neha.kapoor@hotmail.com",
    site: "Kabini River Resort",
    message:
      "Do you have any availability for the first week of June? We're a group of 6 adults.",
    date: "May 15, 2025",
    status: "New",
  },
  {
    id: 4,
    name: "Suresh Iyer",
    email: "suresh.iyer@gmail.com",
    site: "Dandeli",
    message:
      "I'd like to know about the wildlife safari timings and pricing for a family of 5.",
    date: "May 18, 2025",
    status: "Responded",
  },
  {
    id: 5,
    name: "Deepika Nair",
    email: "deepika.nair@outlook.com",
    site: "Bandipur Safari",
    message:
      "Are there any special monsoon packages available? Planning a trip in July.",
    date: "May 20, 2025",
    status: "New",
  },
  {
    id: 6,
    name: "Vikram Reddy",
    email: "vikram.reddy@outlook.com",
    site: "Rivertern lodge bhadra",
    message:
      "Interested in corporate team building activities. Do you offer group bookings?",
    date: "May 22, 2025",
    status: "Responded",
  },
  {
    id: 7,
    name: "Priya Sharma",
    email: "priya.sharma@yahoo.com",
    site: "Kabini River Resort",
    message:
      "Looking for a romantic getaway package for our anniversary in June.",
    date: "May 25, 2025",
    status: "New",
  },
  {
    id: 8,
    name: "Arun Patel",
    email: "arun.patel@hotmail.com",
    site: "Kali Adventure Camp",
    message:
      "Do you have any photography tour packages? I'm a wildlife photographer.",
    date: "May 28, 2025",
    status: "Responded",
  },
];
