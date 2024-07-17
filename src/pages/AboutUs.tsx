import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../components/ui/separator";

const AboutUs = () => {
  const teamMembers = [
    { name: "Jane Doe", role: "CEO", image: "/api/placeholder/100/100" },
    { name: "John Smith", role: "CTO", image: "/api/placeholder/100/100" },
    {
      name: "Alice Johnson",
      role: "Marketing Director",
      image: "/api/placeholder/100/100",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
      <Separator className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>123 Main St, Anytown, USA 12345</span>
              </div>
            </div>
          </CardContent>

          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              At our core, we are committed to delivering exceptional products
              and services that enhance the lives of our customers. We strive to
              innovate, inspire, and create positive change in our community
              while maintaining the highest standards of quality and customer
              satisfaction.
            </p>
          </CardContent>

          <CardContent className="flex flex-row items-center gap-x-3">
            <Facebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
            <Twitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
            <Instagram className="text-pink-600 hover:text-pink-800 cursor-pointer" />
            <Linkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
          </CardContent>
        </div>

        <div>
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="600"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dhaka,%20Bangladesh+(Camper's%20Den)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
          </CardContent>
        </div>
      </div>

      <section className="container py-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-4">
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-medium">John Doe</h3>
                <p className="text-muted-foreground">CEO</p>
                <p className="text-sm text-muted-foreground">
                  John has over 15 years of experience in the industry and is
                  passionate about building sustainable businesses.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JA</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-medium">Jane Appleseed</h3>
                <p className="text-muted-foreground">COO</p>
                <p className="text-sm text-muted-foreground">
                  Jane has a background in operations and is dedicated to
                  streamlining our processes.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-medium">Sarah Musk</h3>
                <p className="text-muted-foreground">CTO</p>
                <p className="text-sm text-muted-foreground">
                  Sarah is a tech visionary who leads our engineering team in
                  developing innovative solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-lg font-medium">Michael Johnson</h3>
                <p className="text-muted-foreground">CFO</p>
                <p className="text-sm text-muted-foreground">
                  Michael brings a wealth of financial expertise to our
                  leadership team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
