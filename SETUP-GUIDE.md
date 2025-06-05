# 🎉 Wedding Website Setup Guide

## Complete Wedding Invitation Website with RSVP System

This guide will help you set up your beautiful wedding website with real-time RSVP tracking, multi-language support, and media message recording.

## 📋 What You Have

Your wedding website includes:
- **Landing Page** (`index.html`) - Beautiful countdown and event details
- **RSVP Page** (`rsvp.html`) - Form with audio/video recording
- **Admin Dashboard** (`admin.html`) - Real-time guest management

## 🚀 Quick Setup (5 Steps)

### Step 1: Customize Your Wedding Details

#### Edit `index.html`:
1. **Line 8**: Replace `[Bride Name]` with actual bride's name
2. **Line 47**: Update Barat date: `Date: June 25, 2024`
3. **Line 48**: Update Barat time: `Time: 7:00 PM`
4. **Line 49**: Update Barat venue: `Venue: [Your Barat Venue]`
5. **Line 56**: Update Walima date: `Date: June 26, 2024`
6. **Line 57**: Update Walima time: `Time: 8:00 PM`
7. **Line 58**: Update Walima venue: `Venue: [Your Walima Venue]`
8. **Line 165**: Set your actual wedding date:
   ```javascript
   const weddingDate = new Date('2024-06-25T19:00:00');
   ```

### Step 2: Test Locally

1. **Create a folder** called `wedding-website`
2. **Put all 3 HTML files** in this folder
3. **Open `index.html`** in your web browser
4. **Test all features**:
   - Countdown timer
   - Language switching
   - RSVP form
   - Audio/video recording
   - Admin dashboard

### Step 3: Set Up Free Hosting (GitHub Pages)

1. **Create GitHub Account**: Go to [github.com](https://github.com) and sign up
2. **Create New Repository**:
   - Click "New repository"
   - Name: `your-name-wedding` (e.g., `afzal-wedding`)
   - Make it **Public**
   - Don't initialize with README
3. **Upload Files**:
   - Click "uploading an existing file"
   - Drag and drop your 3 HTML files
   - Write commit message: "Add wedding website"
   - Click "Commit changes"
4. **Enable GitHub Pages**:
   - Go to repository **Settings**
   - Scroll to **Pages** section
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
   - Click **Save**

### Step 4: Get Your Website URL

Your website will be available at:
```
https://yourusername.github.io/your-name-wedding
```

Example: `https://afzal123.github.io/afzal-wedding`

### Step 5: Create QR Codes

1. **For Barat**: `https://yourusername.github.io/your-name-wedding/rsvp.html?event=barat`
2. **For Walima**: `https://yourusername.github.io/your-name-wedding/rsvp.html?event=walima`

Use any free QR code generator:
- [qr-code-generator.com](https://www.qr-code-generator.com)
- [qrcode.com](https://www.qrcode.com)

## 🎨 Customization Options

### Change Colors
Edit the CSS in each HTML file:
```css
:root {
    --primary-color: #7c3aed;    /* Purple - change this */
    --secondary-color: #ec4899;  /* Pink - change this */
    --accent-color: #f59e0b;     /* Amber - change this */
}
```

### Add Your Photos
1. Create an `images` folder
2. Add your engagement photos
3. Update the HTML to include them

### Customize Messages
Update the placeholder text in the RSVP form and other sections.

## 📱 Mobile Optimization

Your website is already mobile-friendly with:
- Responsive design
- Touch-friendly buttons
- Optimized forms
- Fast loading

## 🔧 Advanced Setup (Optional)

### Add Firebase Database (Free)

For real-time data storage:

1. **Go to Firebase**: [console.firebase.google.com](https://console.firebase.google.com)
2. **Create Project**: "YourName-Wedding"
3. **Add Firestore Database**: Start in test mode
4. **Add Storage**: For audio/video files
5. **Get Config**: Copy Firebase configuration
6. **Update JavaScript**: Replace mock data with Firebase calls

### Custom Domain (Optional)

Instead of GitHub URL, you can use:
- `yournames.wedding`
- `afzalandname.com`

Buy domain from:
- Namecheap ($10/year)
- GoDaddy ($12/year)
- Google Domains ($12/year)

## 📊 Features Included

### ✅ Landing Page Features:
- Live countdown timer
- Beautiful animations
- Event details (Barat & Walima)
- Guest count progress bars
- QR code display
- Multi-language support

### ✅ RSVP Page Features:
- Name and phone collection
- Event selection (Barat/Walima)
- Text wishes
- Audio message recording (2 min max)
- Video message recording (1 min max)
- Indian phone validation
- Multi-language interface

### ✅ Admin Dashboard Features:
- Real-time guest statistics
- Guest list with filters
- Language distribution
- Event capacity tracking
- CSV export
- Recent activity feed

## 🎯 Perfect for Indian Muslim Weddings

- **Bismillah** at the top of each page
- **Barat and Walima** separate events
- **Multi-language** support (English, Hindi, Urdu)
- **Indian phone** number validation
- **Cultural colors** and styling

## 💰 Cost Breakdown

- **GitHub Pages Hosting**: FREE
- **Firebase Database**: FREE (up to 1GB)
- **Domain Name**: $10-12/year (optional)
- **QR Code Generation**: FREE
- **Total**: $0 (or $10-12 with custom domain)

## 🚨 Important Notes

### Before Going Live:
1. ✅ Test on multiple devices (phone, tablet, desktop)
2. ✅ Test in different browsers (Chrome, Safari, Firefox)
3. ✅ Verify all wedding details are correct
4. ✅ Test QR codes work properly
5. ✅ Check audio/video recording works

### Security:
- Admin dashboard has no password (add one if needed)
- All data is stored locally in browser (no real database yet)
- For production, implement Firebase with proper security rules

## 📞 Troubleshooting

### Common Issues:

**1. QR Codes Don't Work**
- Check URL is correct
- Test on different phones
- Make sure website is live

**2. Audio/Video Recording Fails**
- Check browser permissions
- Use HTTPS (required for media)
- Try different browsers

**3. Countdown Shows Wrong Time**
- Update wedding date in JavaScript
- Check timezone settings

**4. Language Not Switching**
- Check all HTML files have language support
- Verify JavaScript is working

**5. Website Not Loading**
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository is public
- Verify file names are correct

## 🎊 Launch Checklist

### Pre-Launch:
- [ ] Wedding details updated
- [ ] Website tested on mobile
- [ ] QR codes generated
- [ ] Wedding cards designed
- [ ] Admin dashboard tested

### Launch Day:
- [ ] Share website URL
- [ ] Post on social media
- [ ] Send WhatsApp messages
- [ ] Include QR codes on wedding cards

### Post-Launch:
- [ ] Monitor RSVP responses
- [ ] Check for technical issues
- [ ] Backup guest data regularly
- [ ] Respond to guest questions

## 🎉 Marketing Your Website

### Share Your Website:
1. **WhatsApp Status**: Post countdown screenshot
2. **Instagram Story**: Share QR code
3. **Facebook Post**: Announce the website
4. **Email Signature**: Add website link
5. **Wedding Cards**: Include QR codes

### Sample Messages:
```
🎉 We're getting married! 
Visit our wedding website for all details and to RSVP:
https://yourusername.github.io/your-name-wedding

Scan the QR code on your invitation card for quick access!
```

## 💡 Pro Tips

1. **Test Everything**: Before printing wedding cards
2. **Backup Data**: Export CSV regularly from admin dashboard
3. **Monitor Usage**: Check admin dashboard daily
4. **Mobile First**: Most guests will use phones
5. **Keep It Simple**: Don't over-customize initially

## 🆘 Need Help?

### If Something Goes Wrong:
1. Check browser console for errors (F12)
2. Test in incognito/private mode
3. Verify all files are uploaded correctly
4. Check GitHub Pages status

### For Advanced Features:
- Add photo gallery
- Integrate payment for gifts
- Add live streaming
- Include accommodation booking

## 🎊 Congratulations!

Your wedding website is now ready to impress your guests! 

**Total Setup Time**: 30-60 minutes
**Total Cost**: FREE
**Guest Impression**: PRICELESS! 🎉

---

*May your wedding website be as beautiful as your love story!* ❤️
