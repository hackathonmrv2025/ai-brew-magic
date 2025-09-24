import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, Heart, Coffee, Users, Award, Star, Zap, Bot, Trophy } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";
import aiBrewing from "@/assets/ai-brewing.jpg";
import coffeeFlatlay from "@/assets/coffee-flatlay.jpg";
import petFriendly from "@/assets/pet-friendly.jpg";
import heroImage from "@/assets/hero-cafe.jpg";
import aiMachineBrewing from "@/assets/ai-machine-brewing.jpg";
import aiMachinesDisplay from "@/assets/ai-machines-display.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-orbitron font-bold text-primary">AI BREW HOUSE</h1>
          <div className="hidden md:flex space-x-6 font-poppins font-semibold">
            <a href="#menu" className="text-foreground hover:text-secondary transition-colors">Menu</a>
            <a href="#gallery" className="text-foreground hover:text-secondary transition-colors">Gallery</a>
            <a href="#exclusive" className="text-foreground hover:text-secondary transition-colors">Exclusive</a>
            <a href="#about" className="text-foreground hover:text-secondary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-teal/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-gold text-primary font-bold px-6 py-3 text-lg font-poppins">
            <Bot className="w-5 h-5 mr-2" />
            AI-POWERED BREWING REVOLUTION
          </Badge>
          <h1 className="text-6xl md:text-8xl font-orbitron font-black text-primary-foreground mb-6 leading-tight">
            AI BREW HOUSE
          </h1>
          <p className="text-xl md:text-3xl font-poppins font-semibold text-primary-foreground/95 mb-10 max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-gold font-bold">Technology Meets Taste</span> - Watch AI machines craft your perfect cup right before your eyes
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-poppins font-bold text-lg px-8 py-4">
              <Coffee className="w-6 h-6 mr-3" />
              EXPLORE MENU
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-gold text-gold hover:bg-gold hover:text-primary font-poppins font-bold text-lg px-8 py-4"
              onClick={() => window.open('https://maps.google.com/?q=AI+Brew+House+Hyderabad', '_blank')}
            >
              <MapPin className="w-6 h-6 mr-3" />
              VISIT US NOW
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-3 border-gold rounded-full flex justify-center">
              <div className="w-2 h-4 bg-gold rounded-full mt-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-secondary/30 via-teal/20 to-gold/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-10 h-10 text-primary font-bold" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">AI BREWING TECH</h3>
                <p className="text-muted-foreground font-poppins font-medium">Watch our futuristic AI machines craft your perfect cup with robotic precision</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">PET PARADISE</h3>
                <p className="text-muted-foreground font-poppins font-medium">Bring your furry friends for the ultimate Instagram-worthy café experience</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-gradient-to-br from-card to-card/80">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-primary">CHEF SPECIALS</h3>
                <p className="text-muted-foreground font-poppins font-medium">Exclusive signature drinks & dishes by Chef John - unlock with loyalty!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Machines Showcase */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gold text-primary font-bold px-6 py-3 text-lg font-poppins">
              <Zap className="w-5 h-5 mr-2" />
              FUTURE IS HERE
            </Badge>
            <h2 className="text-5xl font-orbitron font-black mb-6">AI COFFEE MACHINES</h2>
            <p className="text-2xl font-poppins font-semibold max-w-3xl mx-auto">
              Experience the magic of <span className="text-gold">precision robotics</span> brewing your perfect cup
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-primary-foreground/10 p-8 rounded-xl">
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-gold flex items-center">
                  <Bot className="w-7 h-7 mr-3" />
                  ROBOTIC PRECISION
                </h3>
                <p className="text-lg font-poppins">Our AI algorithms control temperature, pressure, and timing to the microsecond for the perfect extraction every single time.</p>
              </div>
              <div className="bg-primary-foreground/10 p-8 rounded-xl">
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-gold flex items-center">
                  <Zap className="w-7 h-7 mr-3" />
                  LIVE PERFORMANCE
                </h3>
                <p className="text-lg font-poppins">Watch the mesmerizing dance of robotic arms as they craft your coffee right in front of your eyes - pure theater!</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aiMachinesDisplay} 
                alt="Futuristic AI coffee machines with digital displays"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-32">
                <img 
                  src={aiMachineBrewing} 
                  alt="AI robotic arm brewing coffee"
                  className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-gold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-orbitron font-black text-primary mb-6">OUR MENU</h2>
            <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-poppins font-semibold">
              From <span className="text-secondary font-bold">AI-crafted coffees</span> to authentic <span className="text-teal font-bold">French & Italian</span> delicacies
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
            <Card className="p-8 border-4 border-gold bg-gradient-to-br from-gold/10 to-secondary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gold text-primary px-4 py-2 text-sm font-orbitron font-bold">
                VIP EXCLUSIVE
              </div>
              <CardContent>
                <h3 className="text-3xl font-orbitron font-black mb-6 text-primary flex items-center">
                  <Trophy className="w-8 h-8 mr-3 text-gold" />
                  CHEF JOHN'S SIGNATURES
                  <Badge className="ml-auto bg-gold text-primary font-orbitron font-bold">30-DAY STREAK</Badge>
                </h3>
                <div className="bg-gradient-to-r from-gold/20 to-secondary/20 p-6 rounded-xl mb-6">
                  <div className="flex items-center mb-4">
                    <Star className="w-6 h-6 text-gold mr-2" />
                    <h4 className="text-xl font-orbitron font-bold text-primary">UNLOCK EXCLUSIVE ACCESS</h4>
                  </div>
                  <p className="text-lg font-poppins text-foreground">
                    <strong>Maintain a 30-day coffee & food streak</strong> to unlock Chef John's secret menu items. 
                    Visit daily and earn your VIP status for these exclusive creations!
                  </p>
                </div>
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

      {/* Exclusive Member Section */}
      <section id="exclusive" className="py-20 bg-gradient-to-r from-gold/20 via-secondary/30 to-teal/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold text-primary font-orbitron font-black px-8 py-4 text-xl">
              <Trophy className="w-6 h-6 mr-3" />
              VIP EXCLUSIVE PROGRAM
            </Badge>
            <h2 className="text-6xl font-orbitron font-black text-primary mb-8">30-DAY STREAK CHALLENGE</h2>
            <div className="bg-gradient-to-br from-primary/10 to-gold/10 p-12 rounded-3xl border-4 border-gold/50">
              <h3 className="text-4xl font-orbitron font-bold text-primary mb-6">UNLOCK THE IMPOSSIBLE</h3>
              <p className="text-2xl font-poppins font-semibold text-foreground mb-8 leading-relaxed">
                Think you're a true coffee connoisseur? <span className="text-gold font-black">Prove it!</span><br/>
                Visit AI Brew House for <strong>30 consecutive days</strong> with both coffee AND food purchases to unlock:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-secondary/20 to-teal/20 p-8 rounded-2xl">
                  <Bot className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h4 className="text-2xl font-orbitron font-bold text-primary mb-4">QUANTUM BLEND COFFEE</h4>
                  <p className="font-poppins text-lg">Secret molecular gastronomy recipe exclusive to streak champions</p>
                  <div className="text-3xl font-orbitron font-black text-gold mt-4">₹250</div>
                </div>
                
                <div className="bg-gradient-to-br from-teal/20 to-gold/20 p-8 rounded-2xl">
                  <Trophy className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h4 className="text-2xl font-orbitron font-bold text-primary mb-4">AI ALGORITHM PIZZA</h4>
                  <p className="font-poppins text-lg">Pizza toppings chosen by taste AI - impossible to recreate</p>
                  <div className="text-3xl font-orbitron font-black text-gold mt-4">₹320</div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-8 rounded-2xl border-2 border-secondary">
                <h4 className="text-3xl font-orbitron font-bold text-primary mb-4">🏆 HALL OF FAME STATUS 🏆</h4>
                <p className="text-xl font-poppins font-semibold text-foreground">
                  Your name immortalized on our digital leaderboard + lifetime 20% discount on all regular items!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery" className="py-20 bg-gradient-to-br from-secondary/20 to-teal/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-orbitron font-black text-primary mb-6">INSTA-WORTHY MOMENTS</h2>
            <p className="text-2xl text-muted-foreground font-poppins font-semibold">Capture the <span className="text-secondary font-bold">perfect shot</span> at AI Brew House</p>
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
            
            <div className="group relative overflow-hidden rounded-lg aspect-square bg-gradient-to-br from-secondary to-teal flex items-center justify-center md:col-span-2 lg:col-span-2">
              <div className="text-center text-primary-foreground">
                <Coffee className="w-20 h-20 mx-auto mb-6" />
                <h3 className="text-3xl font-orbitron font-bold mb-4">SHARE YOUR MOMENT</h3>
                <p className="text-xl font-poppins font-semibold text-primary-foreground/90">#AIBrewHouse #CoffeeLovers #TechCafé</p>
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
      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-teal to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-orbitron font-black mb-6">VISIT AI BREW HOUSE</h2>
              <p className="text-2xl font-poppins font-semibold text-primary-foreground/90">
                Experience the <span className="text-gold font-bold">future of coffee</span> in the heart of Hyderabad
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-primary-foreground/10 p-8 rounded-2xl backdrop-blur-sm">
                  <h3 className="text-3xl font-orbitron font-bold mb-8 text-gold">GET IN TOUCH</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-7 h-7 mr-4 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-poppins font-bold text-lg mb-2">AI Brew House</p>
                        <p className="text-primary-foreground/90 font-poppins leading-relaxed">
                          Plot No. 42, Jubilee Hills, Road No. 36<br />
                          Hyderabad, Telangana 500033<br />
                          India
                        </p>
                        <Button 
                          className="mt-4 bg-gold text-primary hover:bg-gold/90 font-poppins font-bold"
                          onClick={() => window.open('https://maps.google.com/?q=Jubilee+Hills+Road+No+36+Hyderabad+Telangana+500033', '_blank')}
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          VIEW ON GOOGLE MAPS
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="w-7 h-7 mr-4 text-gold flex-shrink-0" />
                      <div>
                        <p className="font-poppins font-bold text-lg">+91 98765 43210</p>
                        <p className="text-primary-foreground/80 font-poppins">For reservations & streak tracking</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-7 h-7 mr-4 text-gold flex-shrink-0" />
                      <div>
                        <p className="font-poppins font-bold text-lg">hello@aibrewhouse.com</p>
                        <p className="text-primary-foreground/80 font-poppins">We'd love to hear from you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <Card className="p-8 bg-primary-foreground/10 text-primary-foreground border-2 border-gold/30 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-3xl font-orbitron font-bold mb-8 text-gold flex items-center">
                      <Clock className="w-8 h-8 mr-3" />
                      OPENING HOURS
                    </h3>
                    <div className="space-y-4 font-poppins">
                      <div className="flex justify-between items-center p-4 bg-primary-foreground/10 rounded-xl">
                        <span className="font-bold text-lg">Monday - Friday</span>
                        <span className="text-gold font-bold text-lg">7:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-primary-foreground/10 rounded-xl">
                        <span className="font-bold text-lg">Saturday - Sunday</span>
                        <span className="text-gold font-bold text-lg">8:00 AM - 12:00 AM</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gold/20 rounded-xl border border-gold">
                        <span className="font-bold text-lg">Happy Hours ⚡</span>
                        <span className="text-gold font-bold text-lg">3:00 PM - 6:00 PM</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gold/30">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-gold to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-lg font-poppins text-gold font-bold mb-2">HEAD CHEF</p>
                        <p className="font-orbitron font-black text-2xl text-primary-foreground">CHEF JOHN RODRIGUEZ</p>
                        <p className="text-lg font-poppins text-primary-foreground/80 mt-2">Master of AI-Enhanced Culinary Arts</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-secondary to-teal text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-orbitron font-black mb-4 text-gold">AI BREW HOUSE</h3>
          <p className="text-2xl font-poppins font-semibold text-primary-foreground/90 mb-8">
            Where <span className="text-gold font-bold">Technology Meets Taste</span>
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-xl font-poppins font-semibold text-primary-foreground/80 hover:text-gold transition-colors">Instagram</a>
            <a href="#" className="text-xl font-poppins font-semibold text-primary-foreground/80 hover:text-gold transition-colors">Facebook</a>
            <a href="#" className="text-xl font-poppins font-semibold text-primary-foreground/80 hover:text-gold transition-colors">Twitter</a>
          </div>
          <p className="text-lg font-poppins text-primary-foreground/70">
            © 2024 AI Brew House. All rights reserved. | Designed for the future of coffee ☕🤖
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;