"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Calendar, GraduationCap, Users, Building, Globe } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EventSubmissionForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    eventName: "",
    college: "",
    community: "",
    sponsors: "",
    website: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Event submission:", formData)
    alert("Event submitted successfully! We'll review your submission and get back to you soon.")
    setTimeout(()=>{
   router.push("/");
  },1000)

    // Reset form
    setFormData({
      email: "",
      phoneNumber: "",
      eventName: "",
      college: "",
      community: "",
      sponsors: "",
      website: "",
    })

    setIsSubmitting(false)
  }

  return (
    <Card className="bg-slate-800/30 border-slate-600 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white text-2xl">Event Details</CardTitle>
        <CardDescription className="text-gray-300">
          Fill in the details about your event to get it featured on our platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-teal-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventName" className="text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-yellow-400" />
              Event Name
            </Label>
            <Input
              id="eventName"
              name="eventName"
              value={formData.eventName}
              onChange={handleInputChange}
              placeholder="Innovation Hackathon 2024"
              required
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-yellow-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="college" className="text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-green-400" />
                College/University
              </Label>
              <Input
                id="college"
                name="college"
                value={formData.college}
                onChange={handleInputChange}
                placeholder="MIT, Stanford, etc."
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-green-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="community" className="text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-400" />
                Community/Organization
              </Label>
              <Input
                id="community"
                name="community"
                value={formData.community}
                onChange={handleInputChange}
                placeholder="Tech Club, Developer Community, etc."
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-pink-400"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sponsors" className="text-white flex items-center gap-2">
              <Building className="w-4 h-4 text-orange-400" />
              Sponsors (Optional)
            </Label>
            <Textarea
              id="sponsors"
              name="sponsors"
              value={formData.sponsors}
              onChange={handleInputChange}
              placeholder="List your event sponsors or potential sponsors..."
              rows={4}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-orange-400 resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="website" className="text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              Website (Optional)
            </Label>
            <Input
              id="website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="https://your-event-website.com"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 focus:border-blue-400"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white border-0 py-3 text-lg font-semibold"
          >
            {isSubmitting ? "Submitting..." : "Submit Event"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
