import webapp2

class MainPage(webapp2.RequestHandler):
    def get(self):
        self.response.write("Hello World ! My name is Akash Patil !")
app = webapp2.WSGIApplication([('/', MainPage)], debug=True)