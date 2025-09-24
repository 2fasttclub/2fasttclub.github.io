import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Instagram, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: contactData
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly at 2fasttclub@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-brand-red to-brand-red-light bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Ready to join our running community? We'd love to hear from you!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-brand-red">Contact Information</CardTitle>
                <CardDescription>
                  Reach out to us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-red/10 rounded-lg">
                    <Users className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-medium">Join our GroupMe</p>
                    <Button variant="link" asChild className="p-0 h-auto text-brand-red">
                      <a href="https://groupme.com/join_group/110452030/TN5hbw4T" target="_blank" rel="noopener noreferrer">
                        Click to join the group chat
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-red/10 rounded-lg">
                    <Mail className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-medium">Email us</p>
                    <a href="mailto:2fasttclub@gmail.com" className="text-brand-red hover:underline">
                      2fasttclub@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-red/10 rounded-lg">
                    <Instagram className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <p className="font-medium">Follow us on Instagram</p>
                    <a href="https://instagram.com/2fasttclub" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline">
                      @2fasttclub
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-semibold mb-3 text-brand-red">Meeting Times</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>🏃 Monday, Wednesday, Friday: 6:00 PM</p>
                    <p>🏃 Saturday: 9:00 AM</p>
                    <p>📍 Various campus locations</p>
                    <p>Check our GroupMe for weekly updates!</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-brand-red">Send us a Message</CardTitle>
                <CardDescription>
                  Have questions? Want to get involved? Drop us a line!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@rutgers.edu" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us about yourself, your running experience, or any questions you have!"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="brand" className="w-full" disabled={isSubmitting}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border text-center">
            <h2 className="text-2xl font-semibold mb-4 text-brand-red">New to Campus?</h2>
            <p className="text-muted-foreground mb-4">
              Don't know anyone yet? Perfect! 2FASTT is where many of our members made their first friends at Rutgers. 
              Come to any run - we'll make sure you feel welcome from day one.
            </p>
            <Button variant="brand" asChild>
              <a href="https://groupme.com/join_group/110452030/TN5hbw4T" target="_blank" rel="noopener noreferrer">
                Join the Club Today
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;