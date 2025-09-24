import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, Heart, Coffee, Users, Award } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import aiBrewing from "@/assets/ai-brewing.jpg";
import coffeeFlatlay from "@/assets/coffee-flatlay.jpg";
import petFriendly from "@/assets/pet-friendly.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">AI BREW HOUSE</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-accent text-primary font-semibold px-4 py-2">
            <Coffee className="w-4 h-4 mr-2" />
            AI-Powered Brewing
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            AI BREW HOUSE
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Where Technology Meets Taste - Watch AI machines craft your perfect cup right before your eyes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <Coffee className="w-5 h-5 mr-2" />
              View Menu
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <MapPin className="w-5 h-5 mr-2" />
              Visit Us
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Brewing Technology</h3>
                <p className="text-muted-foreground">Watch our AI machines craft your perfect cup with precision and artistry</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pet Friendly</h3>
                <p className="text-muted-foreground">Bring your furry friends along for the perfect café experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Chef Specials</h3>
                <p className="text-muted-foreground">Exclusive signature drinks and dishes crafted by Chef John</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Menu</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From AI-crafted coffees to authentic French & Italian delicacies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hot Coffee */}
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                  <Coffee className="w-6 h-6 mr-3" />
                  Hot Brew Coffee
                  <Badge className="ml-auto bg-accent text-primary">+ Free Breadsticks</Badge>
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "AI Espresso", price: "₹120", desc: "Perfect shot brewed by AI precision" },
                    { name: "Cappuccino Classic", price: "₹150", desc: "Creamy foam art created live" },
                    { name: "Latte Supreme", price: "₹180", desc: "Smooth milk blend with AI timing" },
                    { name: "Americano Strong", price: "₹130", desc: "Bold and robust morning fuel" },
                    { name: "Macchiato Delight", price: "₹160", desc: "Caramel perfection in every sip" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cold Coffee */}
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                  <Coffee className="w-6 h-6 mr-3" />
                  Cold Brew Collection
                  <Badge className="ml-auto bg-accent text-primary">Custom Bottles</Badge>
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Iced AI Brew", price: "₹140", desc: "Your name etched on premium bottle" },
                    { name: "Cold Brew Classic", price: "₹160", desc: "12-hour slow extraction perfection" },
                    { name: "Frappé Fusion", price: "₹190", desc: "Blended with AI-calculated ratios" },
                    { name: "Iced Caramel Latte", price: "₹180", desc: "Sweet indulgence in personalized bottle" },
                    { name: "Mint Coffee Cooler", price: "₹170", desc: "Refreshing twist with fresh mint" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Chef Specials */}
            <Card className="p-8 border-2 border-accent">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                  <Award className="w-6 h-6 mr-3" />
                  Chef John's Signatures
                  <Badge className="ml-auto bg-primary text-primary-foreground">Exclusive</Badge>
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Quantum Blend Coffee", price: "₹250", desc: "Secret recipe with molecular gastronomy" },
                    { name: "Neural Network Noir", price: "₹280", desc: "Dark roast with AI-optimized flavor profile" },
                    { name: "Signature Truffle Pizza", price: "₹450", desc: "Handcrafted with imported French truffles" },
                    { name: "AI Algorithm Special", price: "₹320", desc: "Pizza with toppings chosen by taste AI" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Multi-Cuisine */}
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
                  <Users className="w-6 h-6 mr-3" />
                  French & Italian Delights
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Croissant Classique", price: "₹120", desc: "Buttery French pastry perfection" },
                    { name: "Margherita Italiana", price: "₹280", desc: "Authentic Italian thin crust" },
                    { name: "Quiche Lorraine", price: "₹200", desc: "Traditional French egg tart" },
                    { name: "Pasta Carbonara", price: "₹320", desc: "Creamy Roman classic" },
                    { name: "Crème Brûlée", price: "₹180", desc: "Caramelized French dessert" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-border pb-3">
                      <div>
                        <h4 className="font-medium text-foreground">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="font-semibold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Instagram-Worthy Moments</h2>
            <p className="text-xl text-muted-foreground">Capture the perfect shot at AI Brew House</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src={cafeInterior} 
                alt="Modern AI café interior with young customers"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Modern Interior</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src={aiBrewing} 
                alt="AI robotic arm brewing coffee"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">AI Brewing Magic</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square">
              <img 
                src={coffeeFlatlay} 
                alt="Aesthetic coffee and pastries flat lay"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Perfect Pairings</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square md:col-span-2 lg:col-span-1">
              <img 
                src={petFriendly} 
                alt="Pet-friendly café atmosphere"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Pet Paradise</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-primary to-accent flex items-center justify-center md:col-span-2 lg:col-span-2">
              <div className="text-center text-primary-foreground">
                <Coffee className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Share Your Moment</h3>
                <p className="text-primary-foreground/80">#AIBrewHouse #CoffeeLovers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-8">The Future of Coffee</h2>
            <p className="text-lg text-foreground mb-12 leading-relaxed">
              At AI Brew House, we've revolutionized the coffee experience by combining cutting-edge artificial intelligence 
              with the artistry of traditional brewing. Watch in amazement as our AI-powered machines craft each cup with 
              mathematical precision, while you enjoy the warm, welcoming atmosphere that makes every visit special.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">AI-Powered Precision</h3>
                  <p className="text-muted-foreground mb-4">
                    Our advanced brewing algorithms analyze over 200 variables to create your perfect cup. Temperature, 
                    timing, pressure, and grind size are all optimized in real-time.
                  </p>
                  <Badge className="bg-accent text-primary">Innovation First</Badge>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Pet-Friendly Haven</h3>
                  <p className="text-muted-foreground mb-4">
                    We believe great coffee is best shared with all family members, including the furry ones. 
                    Our space is designed to welcome pets and their humans alike.
                  </p>
                  <Badge className="bg-accent text-primary">All Welcome</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Visit AI Brew House</h2>
              <p className="text-xl text-primary-foreground/80">
                Experience the future of coffee in the heart of Hyderabad
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-accent" />
                    <div>
                      <p className="font-medium">AI Brew House</p>
                      <p className="text-primary-foreground/80">
                        Plot No. 42, Jubilee Hills, Road No. 36<br />
                        Hyderabad, Telangana 500033<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-accent" />
                    <div>
                      <p className="font-medium">+91 98765 43210</p>
                      <p className="text-primary-foreground/80">For reservations & inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-accent" />
                    <div>
                      <p className="font-medium">hello@aibrewhouse.com</p>
                      <p className="text-primary-foreground/80">We'd love to hear from you</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 bg-primary-foreground text-primary">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Clock className="w-6 h-6 mr-3" />
                    Opening Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>7:00 AM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday - Sunday</span>
                      <span>8:00 AM - 12:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Happy Hours</span>
                      <span>3:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Head Chef</p>
                    <p className="font-semibold text-lg">Chef John Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Master of AI-Enhanced Culinary Arts</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">AI BREW HOUSE</h3>
          <p className="text-primary-foreground/80 mb-4">
            Where Technology Meets Taste
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Facebook</a>
            <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Twitter</a>
          </div>
          <p className="text-sm text-primary-foreground/60">
            © 2024 AI Brew House. All rights reserved. | Designed for the future of coffee
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;