"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileUploader } from "@/components/file-uploader"
import TagSelector from "@/components/tag-selector"
import StarRatingInput from "@/components/star-rating-input"
import { ArrowLeft, Save, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for categories
const categories = [
  { id: "cat-1", name: "Electronics" },
  { id: "cat-2", name: "Home & Kitchen" },
  { id: "cat-3", name: "Fashion" },
  { id: "cat-4", name: "Beauty" },
  { id: "cat-5", name: "Sports" },
  { id: "cat-6", name: "Books" },
  { id: "cat-7", name: "Toys & Games" },
  { id: "cat-8", name: "Health & Personal Care" },
]

// Mock data for tags
const availableTags = [
  { id: "tag-1", name: "Headphones" },
  { id: "tag-2", name: "Noise Cancelling" },
  { id: "tag-3", name: "Wireless" },
  { id: "tag-4", name: "Vacuum" },
  { id: "tag-5", name: "Cordless" },
  { id: "tag-6", name: "Smart Home" },
  { id: "tag-7", name: "Laptop" },
  { id: "tag-8", name: "Apple" },
  { id: "tag-9", name: "MacOS" },
  { id: "tag-10", name: "E-Reader" },
  { id: "tag-11", name: "Amazon" },
  { id: "tag-12", name: "Reading" },
]

export default function CreateReviewPage() {
  const [selectedTags, setSelectedTags] = useState<{ id: string; name: string }[]>([])
  const [rating, setRating] = useState<number>(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)

    toast({
      title: "Review submitted successfully",
      description: "Your review has been submitted and is pending approval.",
      duration: 5000,
    })
  }

  const handleSaveDraft = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)

    toast({
      title: "Draft saved",
      description: "Your review draft has been saved.",
      duration: 3000,
    })
  }

  return (
    <div className="container px-4 md:px-6 py-8 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" className="mr-4" asChild>
          <Link href="/reviews">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Reviews
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Create a Review</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Information</TabsTrigger>
            <TabsTrigger value="details">Review Details</TabsTrigger>
            <TabsTrigger value="media">Media & Publish</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Provide the basic details about the product you're reviewing.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Review Title</Label>
                  <Input id="title" placeholder="Enter a descriptive title for your review" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <TagSelector
                    selectedTags={selectedTags}
                    onTagsChange={setSelectedTags}
                    availableTags={availableTags}
                    allowCreate={true}
                  />
                  <p className="text-xs text-muted-foreground">
                    Tags help users find your review. Add up to 5 relevant tags.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <StarRatingInput rating={rating} onRatingChange={setRating} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purchase-source">Purchase Source (Optional)</Label>
                  <Input id="purchase-source" placeholder="Where did you purchase this product?" />
                  <p className="text-xs text-muted-foreground">
                    Adding the purchase source helps establish credibility.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={handleSaveDraft} disabled={isSubmitting}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Draft
                </Button>
                <Button type="button" onClick={() => document.getElementById("details-tab")?.click()}>
                  Continue
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Review Details</CardTitle>
                <CardDescription>Share your experience with the product in detail.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="summary">Brief Summary</Label>
                  <Textarea
                    id="summary"
                    placeholder="Provide a brief summary of your experience with the product"
                    className="min-h-[80px]"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    This will appear as a preview in search results and listings.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Full Review</Label>
                  <Textarea
                    id="description"
                    placeholder="Write your detailed review here..."
                    className="min-h-[200px]"
                    required
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Pros & Cons</Label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="pros" className="text-sm text-muted-foreground mb-2 block">
                        Pros
                      </Label>
                      <Textarea id="pros" placeholder="List the positive aspects..." className="min-h-[120px]" />
                    </div>
                    <div>
                      <Label htmlFor="cons" className="text-sm text-muted-foreground mb-2 block">
                        Cons
                      </Label>
                      <Textarea id="cons" placeholder="List the negative aspects..." className="min-h-[120px]" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => document.getElementById("basic-tab")?.click()}>
                  Back
                </Button>
                <Button type="button" onClick={() => document.getElementById("media-tab")?.click()}>
                  Continue
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="media" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Media & Publish</CardTitle>
                <CardDescription>Add images and finalize your review for submission.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Product Images</Label>
                  <FileUploader />
                  <p className="text-xs text-muted-foreground">
                    Upload up to 5 images. Supported formats: JPG, PNG, WEBP. Max size: 5MB each.
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm">
                      I confirm that this is my honest review based on my personal experience with the product.
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="guidelines" required />
                    <Label htmlFor="guidelines" className="text-sm">
                      I have read and agree to the{" "}
                      <Link href="/guidelines" className="text-primary hover:underline">
                        community guidelines
                      </Link>
                      .
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => document.getElementById("details-tab")?.click()}>
                  Back
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" type="button" onClick={handleSaveDraft} disabled={isSubmitting}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Draft
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Review
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}
