import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

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
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
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
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                  lat: 23.8041,
                  lng: 90.4152,
                }}
                defaultZoom={11}
              >
                <AnyReactComponent text="My Marker" />
              </GoogleMapReact>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            At our core, we are committed to delivering exceptional products and
            services that enhance the lives of our customers. We strive to
            innovate, inspire, and create positive change in our community while
            maintaining the highest standards of quality and customer
            satisfaction.
          </p>
        </CardContent>
      </Card>

      <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center pt-6">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <Facebook className="text-blue-600 hover:text-blue-800 cursor-pointer" />
        <Twitter className="text-blue-400 hover:text-blue-600 cursor-pointer" />
        <Instagram className="text-pink-600 hover:text-pink-800 cursor-pointer" />
        <Linkedin className="text-blue-700 hover:text-blue-900 cursor-pointer" />
      </div>
    </div>
  );
};

export default AboutUs;
