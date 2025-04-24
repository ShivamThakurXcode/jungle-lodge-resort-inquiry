"use client";

import { useState } from "react";
import { Bell, Mail, MessageSquare } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [telegramNotifications, setTelegramNotifications] = useState(false);
  const [slackNotifications, setSlackNotifications] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API Integration</TabsTrigger>
          <TabsTrigger value="email">Email Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how you want to be notified about new bookings and
                inquiries
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <Label htmlFor="email-notifications" className="flex-1">
                    Email Notifications
                  </Label>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              {emailNotifications && (
                <div className="ml-6 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="notification-email">
                      Notification Email
                    </Label>
                    <Input
                      id="notification-email"
                      placeholder="admin@jungleandlodge.com"
                      defaultValue="admin@jungleandlodge.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Email Notification Types</Label>
                    <div className="grid gap-2">
                      <div className="flex items-center space-x-2">
                        <Switch id="new-booking" defaultChecked />
                        <Label htmlFor="new-booking">New Booking</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="new-inquiry" defaultChecked />
                        <Label htmlFor="new-inquiry">New Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch id="booking-status" defaultChecked />
                        <Label htmlFor="booking-status">
                          Booking Status Changes
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <Label htmlFor="telegram-notifications" className="flex-1">
                    Telegram Notifications
                  </Label>
                </div>
                <Switch
                  id="telegram-notifications"
                  checked={telegramNotifications}
                  onCheckedChange={setTelegramNotifications}
                />
              </div>

              {telegramNotifications && (
                <div className="ml-6 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="telegram-bot-token">
                      Telegram Bot Token
                    </Label>
                    <Input
                      id="telegram-bot-token"
                      placeholder="Enter your Telegram bot token"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="telegram-chat-id">Telegram Chat ID</Label>
                    <Input
                      id="telegram-chat-id"
                      placeholder="Enter your Telegram chat ID"
                    />
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between space-x-2">
                <div className="flex items-center space-x-2">
                  <Bell className="h-4 w-4" />
                  <Label htmlFor="slack-notifications" className="flex-1">
                    Slack Notifications
                  </Label>
                </div>
                <Switch
                  id="slack-notifications"
                  checked={slackNotifications}
                  onCheckedChange={setSlackNotifications}
                />
              </div>

              {slackNotifications && (
                <div className="ml-6 space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="slack-webhook">Slack Webhook URL</Label>
                    <Input
                      id="slack-webhook"
                      placeholder="Enter your Slack webhook URL"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="slack-channel">Slack Channel</Label>
                    <Input
                      id="slack-channel"
                      placeholder="#bookings"
                      defaultValue="#bookings"
                    />
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button>Save Notification Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>API Integration</CardTitle>
              <CardDescription>
                Configure the API endpoints for your websites
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex gap-2">
                  <Input
                    id="api-key"
                    value="jl_api_12345678901234567890"
                    readOnly
                  />
                  <Button variant="outline">Copy</Button>
                  <Button variant="outline">Regenerate</Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Use this API key to authenticate requests from your websites
                </p>
              </div>

              <div className="grid gap-2">
                <Label>API Endpoints</Label>
                <div className="rounded-md bg-muted p-4">
                  <p className="font-mono text-sm">
                    POST https://api.jungleandlodge.com/v1/bookings
                  </p>
                  <p className="font-mono text-sm mt-2">
                    POST https://api.jungleandlodge.com/v1/inquiries
                  </p>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="webhook-url">Webhook URL (Optional)</Label>
                <Input
                  id="webhook-url"
                  placeholder="https://your-site.com/webhook"
                />
                <p className="text-sm text-muted-foreground">
                  We'll send a POST request to this URL when new data is
                  received
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save API Settings</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Website Configuration</CardTitle>
              <CardDescription>
                Manage the websites that send data to this portal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Rivertern lodge bhadra</h3>
                      <p className="text-sm text-muted-foreground">
                        amazonlodge.com
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Kabini River Resort</h3>
                      <p className="text-sm text-muted-foreground">
                        rainforestretreat.com
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Kali Adventure Camp</h3>
                      <p className="text-sm text-muted-foreground">
                        junglesafari.com
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <Button variant="outline" className="w-full">
                    + Add New Website
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Website Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>
                Customize the email templates sent to administrators and guests
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="template-type">Template Type</Label>
                <Select defaultValue="new-booking">
                  <SelectTrigger id="template-type">
                    <SelectValue placeholder="Select template type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new-booking">
                      New Booking Notification
                    </SelectItem>
                    <SelectItem value="booking-confirmation">
                      Booking Confirmation
                    </SelectItem>
                    <SelectItem value="new-inquiry">
                      New Inquiry Notification
                    </SelectItem>
                    <SelectItem value="inquiry-response">
                      Inquiry Response
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email-subject">Email Subject</Label>
                <Input
                  id="email-subject"
                  defaultValue="New Booking: {{booking_id}} - {{guest_name}}"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email-body">Email Body</Label>
                <Textarea
                  id="email-body"
                  rows={10}
                  defaultValue={`Dear Admin,

A new booking has been received with the following details:

Booking ID: {{booking_id}}
Guest: {{guest_name}}
Email: {{guest_email}}
Phone: {{guest_phone}}
Site: {{site_name}}
Arrival: {{arrival_date}}
Departure: {{departure_date}}
Number of People: {{people_count}}

Special Requests:
{{special_requests}}

Please log in to the admin portal to manage this booking.

Best regards,
Jungle & Lodge Team`}
                />
              </div>

              <div className="space-y-1">
                <Label>Available Variables</Label>
                <div className="text-sm text-muted-foreground">
                  <p>
                    {`{{booking_id}}, {{guest_name}}, {{guest_email}}, {{guest_phone}}, {{site_name}}, {{arrival_date}}, {{departure_date}}, {{people_count}}, {{special_requests}}`}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Preview</Button>
              <Button>Save Template</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
