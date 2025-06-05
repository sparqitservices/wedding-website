// Email Service for Wedding Website
// This service handles sending emails using EmailJS

class EmailService {
    constructor() {
        // Initialize EmailJS with your public key
        // You'll need to replace this with your actual EmailJS public key
        this.publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';
        this.serviceId = 'YOUR_SERVICE_ID';
        this.templateId = 'YOUR_TEMPLATE_ID';

        // Initialize EmailJS
        this.initEmailJS();
    }

    initEmailJS() {
        // Load EmailJS library if not already loaded
        if (typeof emailjs === 'undefined') {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
            script.onload = () => {
                emailjs.init(this.publicKey);
            };
            document.head.appendChild(script);
        } else {
            emailjs.init(this.publicKey);
        }
    }

    async sendRSVPNotification(rsvpData) {
        try {
            // Prepare email data for admin notification
            const adminEmailData = {
                to_email: 'iafzalhameed@gmail.com',
                to_name: 'Afzal',
                from_name: rsvpData.name,
                guest_name: rsvpData.name,
                guest_email: rsvpData.email,
                guest_phone: rsvpData.phone,
                event_type: rsvpData.eventType,
                relation: rsvpData.relation,
                barat_guests: rsvpData.baratGuests || 0,
                walima_guests: rsvpData.walimaGuests || 0,
                dietary_restrictions: rsvpData.dietary || 'None',
                message: rsvpData.message || 'No message provided',
                submission_date: new Date().toLocaleString(),
                total_guests: (rsvpData.baratGuests || 0) + (rsvpData.walimaGuests || 0)
            };

            // Send admin notification
            const adminResponse = await emailjs.send(
                this.serviceId,
                'admin_notification_template',
                adminEmailData
            );

            // Prepare confirmation email for guest
            const guestEmailData = {
                to_email: rsvpData.email,
                to_name: rsvpData.name,
                event_type: rsvpData.eventType,
                barat_guests: rsvpData.baratGuests || 0,
                walima_guests: rsvpData.walimaGuests || 0,
                submission_date: new Date().toLocaleString()
            };

            // Send guest confirmation
            const guestResponse = await emailjs.send(
                this.serviceId,
                'guest_confirmation_template',
                guestEmailData
            );

            return {
                success: true,
                adminResponse,
                guestResponse
            };

        } catch (error) {
            console.error('Email sending failed:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    // Alternative method using Formspree (easier setup)
    async sendViaFormspree(rsvpData) {
        try {
            const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: rsvpData.name,
                    email: rsvpData.email,
                    phone: rsvpData.phone,
                    eventType: rsvpData.eventType,
                    relation: rsvpData.relation,
                    baratGuests: rsvpData.baratGuests || 0,
                    walimaGuests: rsvpData.walimaGuests || 0,
                    dietary: rsvpData.dietary || '',
                    message: rsvpData.message || '',
                    submissionTime: new Date().toISOString(),
                    _subject: `New RSVP from ${rsvpData.name} - ${rsvpData.eventType}`
                })
            });

            if (response.ok) {
                return { success: true };
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Formspree submission failed:', error);
            return { success: false, error: error.message };
        }
    }

    // Method using Netlify Forms (if hosting on Netlify)
    async sendViaNetlify(rsvpData) {
        try {
            const formData = new FormData();
            formData.append('form-name', 'wedding-rsvp');

            Object.keys(rsvpData).forEach(key => {
                formData.append(key, rsvpData[key] || '');
            });

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                return { success: true };
            } else {
                throw new Error('Failed to submit form');
            }
        } catch (error) {
            console.error('Netlify form submission failed:', error);
            return { success: false, error: error.message };
        }
    }
}

// Export for use in other files
window.EmailService = EmailService;