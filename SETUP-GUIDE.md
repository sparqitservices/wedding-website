# Wedding Website Setup Guide
## Afzal & Samra Wedding Website - Complete Setup Instructions

### 🎉 Overview
This is a complete wedding invitation website with RSVP functionality, admin dashboard, and email notifications. The website supports multiple languages (English, Hindi, Urdu) and has a beautiful Islamic theme.

### 📁 Files Included
- `index.html` - Main homepage with enhanced design
- `barat-walima.html` - Invitation page for Barat + Walima guests
- `walima-only.html` - Invitation page for Walima-only guests
- `thank-you.html` - Thank you page after RSVP submission
- `admin.html` - Admin dashboard for managing RSVPs
- `email-service.js` - Email integration service
- `SETUP-GUIDE.md` - This setup guide

### 🚀 Quick Start

#### Option 1: GitHub Pages (Recommended - Free)
1. Create a new GitHub repository
2. Upload all website files to the repository
3. Go to Settings → Pages
4. Select source as "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Your website will be available at `https://yourusername.github.io/repository-name`

#### Option 2: Custom Domain (afzalandsamra.online)
1. Follow GitHub Pages setup above
2. In repository Settings → Pages → Custom domain
3. Enter: `afzalandsamra.online`
4. Enable "Enforce HTTPS"

### 🌐 Domain Configuration (Namecheap)

#### DNS Settings for afzalandsamra.online:
1. Log into Namecheap account
2. Go to Domain List → Manage → Advanced DNS
3. Add these records:

```
Type: A Record
Host: @
Value: 185.199.108.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.109.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.110.153
TTL: Automatic

Type: A Record
Host: @
Value: 185.199.111.153
TTL: Automatic

Type: CNAME Record
Host: www
Value: yourusername.github.io
TTL: Automatic
```

### 📧 Email Integration Setup

#### Method 1: EmailJS (Recommended)
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create a free account
3. Create a new service (Gmail/Outlook/etc.)
4. Create email templates:

**Admin Notification Template:**
```
Subject: New RSVP - {{guest_name}} for {{event_type}}

Dear Afzal,

You have received a new RSVP for your wedding!

Guest Details:
- Name: {{guest_name}}
- Email: {{guest_email}}
- Phone: {{guest_phone}}
- Event: {{event_type}}
- Relation: {{relation}}
- Barat Guests: {{barat_guests}}
- Walima Guests: {{walima_guests}}
- Dietary Restrictions: {{dietary_restrictions}}
- Message: {{message}}

Submitted on: {{submission_date}}

Best regards,
Wedding Website System
```

**Guest Confirmation Template:**
```
Subject: RSVP Confirmation - Afzal & Samra Wedding

Dear {{to_name}},

Thank you for your RSVP! We're excited to celebrate with you.

Your RSVP Details:
- Event: {{event_type}}
- Barat Guests: {{barat_guests}}
- Walima Guests: {{walima_guests}}
- Submitted: {{submission_date}}

Event Details:
- Barat: June 25, 2025
- Walima: June 26, 2025

We'll send you venue details closer to the date.

With love,
Afzal & Samra
```

5. Update `email-service.js` with your EmailJS credentials:
```javascript
this.publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
this.serviceId = 'YOUR_SERVICE_ID';
this.templateId = 'YOUR_TEMPLATE_ID';
```

#### Method 2: Formspree (Easier Setup)
1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Use your email: `iafzalhameed@gmail.com`
5. Get your form endpoint
6. Update the Formspree URL in `email-service.js`

#### Method 3: Netlify Forms (If using Netlify)
1. Deploy to Netlify
2. Add `data-netlify="true"` to your forms
3. Netlify will automatically handle form submissions

### 🎨 Customization

#### Colors & Branding
The website uses Islamic-themed colors:
- Primary Gold: `#FFD700`
- Brown: `#8B4513`
- Dark Brown: `#B8860B`

#### Images
Replace placeholder images with your actual wedding photos:
- Hero slider images
- Background images
- Add your engagement photos

#### Content Updates
Update these in all HTML files:
- Wedding dates
- Venue information
- Contact details
- Family names (already updated)

### 📱 QR Code Generation

#### For Wedding Cards:
1. **Barat + Walima QR Code:**
   - URL: `https://afzalandsamra.online/barat-walima.html`

2. **Walima Only QR Code:**
   - URL: `https://afzalandsamra.online/walima-only.html`

#### QR Code Generators:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)
- [Google Charts QR](https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https://afzalandsamra.online/barat-walima.html)

### 🔧 Technical Features

#### Responsive Design
- Mobile-friendly
- Tablet optimized
- Desktop enhanced

#### Multi-language Support
- English
- Hindi (हिंदी)
- Urdu (اردو)

#### Admin Dashboard Features
- Real-time RSVP tracking
- Guest count management
- Export functionality (CSV, Excel, PDF)
- Print guest lists
- Advanced filtering

#### Security Features
- HTTPS enabled
- Form validation
- Spam protection

### 📊 Analytics Setup (Optional)

#### Google Analytics
Add this to all HTML files before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 🎯 Testing Checklist

#### Before Going Live:
- [ ] Test all forms on different devices
- [ ] Verify email notifications work
- [ ] Check language switcher
- [ ] Test QR codes
- [ ] Verify countdown timer
- [ ] Check admin dashboard
- [ ] Test export functionality
- [ ] Verify responsive design

#### Email Testing:
- [ ] Submit test RSVP
- [ ] Check admin email received
- [ ] Verify guest confirmation email
- [ ] Test with different email providers

### 🚨 Troubleshooting

#### Common Issues:

**1. Emails not sending:**
- Check EmailJS/Formspree configuration
- Verify API keys
- Check spam folders
- Test with different email providers

**2. Language switcher not working:**
- Clear browser cache
- Check JavaScript console for errors
- Verify language data attributes

**3. QR codes not working:**
- Test URLs directly in browser
- Ensure HTTPS is working
- Check domain propagation

**4. Admin dashboard not loading:**
- Check if admin.html is uploaded
- Verify file permissions
- Test in different browsers

### 📞 Support

#### For Technical Issues:
- Email: iafzalhameed@gmail.com
- Check browser console for errors
- Test in incognito mode

#### For Content Updates:
- Edit HTML files directly
- Re-upload to GitHub
- Changes reflect automatically

### 🎊 Launch Checklist

#### Final Steps:
1. [ ] Upload all files to GitHub
2. [ ] Configure custom domain
3. [ ] Set up email integration
4. [ ] Generate QR codes
5. [ ] Test complete user journey
6. [ ] Share with family for testing
7. [ ] Print wedding cards with QR codes
8. [ ] Monitor RSVPs via admin dashboard

### 📈 Post-Launch

#### Monitoring:
- Check admin dashboard daily
- Monitor email notifications
- Track guest responses
- Export guest lists for planning

#### Updates:
- Add venue details closer to date
- Update any changed information
- Send reminder emails if needed

---

## 🎉 Congratulations!

Your wedding website is now ready! This professional, feature-rich website will help you manage your wedding invitations and RSVPs efficiently.

**Website URL:** https://afzalandsamra.online
**Admin Dashboard:** https://afzalandsamra.online/admin.html

May Allah bless your union and grant you happiness! 💕

---

*Created with love for Afzal & Samra's special day* ✨