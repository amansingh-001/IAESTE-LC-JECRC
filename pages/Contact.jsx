import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkIcon from "@mui/icons-material/Link";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";


const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [focused, setFocused] = useState({
        name: false,
        email: false,
        phone: false,
        message: false,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFocus = (field) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field) => {
        setFocused({ ...focused, [field]: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SERVICE_ID = "service_75k3zje";
        const TEMPLATE_ID = "template_cne4f3x";
        const PUBLIC_KEY = "AHVjA0BZY1HDPxsVU";

        if (SERVICE_ID === "service_sandbox" || PUBLIC_KEY === "public_key_sandbox") {
            // Simulate success for demonstration/development if keys are not set
            setTimeout(() => {
                console.log("Simulating EmailJS send with data:", form);
                alert("Message sent! (Simulation Mode: Update EmailJS keys in Contact.jsx to send real emails)");
                setForm({ name: "", email: "", phone: "", message: "" });
                setIsSubmitting(false);
            }, 1000);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Thank you! Your message has been sent.");
                setForm({ name: "", email: "", phone: "", message: "" });
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message. Please check your internet connection or EmailJS configuration.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    const contactInfo = [
        {
            icon: <LocationOnIcon />,
            title: "Address",
            content: "IAESTE INDIA LC JECRC",
            subContent: "Science Block, 3rd Floor, JECRC UNIVERSITY, Jaipur, Rajasthan",
            color: "#0B3D59"
        },
        {
            icon: <PhoneIcon />,
            title: "Phone",
            content: "Devansh Gupta | Rakshita Rathore",
            subContent: "(+91) 6376044011 | (+91) 7690000331",
            color: "#0B3D59"
        },
        {
            icon: <EmailIcon />,
            title: "Email",
            content: "head.hra@iaestelcjecrc.com",
            subContent: "",
            color: "#0B3D59"
        }
    ];

    const socialLinks = [
        {
            icon: <LinkedInIcon />,
            href: "https://www.linkedin.com/company/iaestelcjecrc/",
            color: "#0077B5",
            name: "LinkedIn"
        },
        {
            icon: <InstagramIcon />,
            href: "https://www.instagram.com/iaestelcjecrc/",
            color: "#E4405F",
            name: "Instagram"
        },
        {
            icon: <FacebookIcon />,
            href: "https://www.facebook.com/IAESTEIndiaLCJECRC",
            color: "#1877F2",
            name: "Facebook"
        }
    ];

    return (
        <div style={{
            minHeight: "100vh",
            background: "linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%)",
            padding: "40px clamp(16px, 4vw, 20px)",
            paddingTop: "80px"
        }}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ maxWidth: "1200px", margin: "0 auto" }}
            >
                <motion.div variants={itemVariants} style={{ textAlign: "center", marginBottom: "60px" }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 900,
                            background: "linear-gradient(135deg, #0B3D59 0%, #0E517A 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            marginBottom: "16px",
                            letterSpacing: "-0.02em"
                        }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            color: "#666",
                            fontWeight: 400
                        }}
                    >
                        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </motion.p>
                </motion.div>



                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "32px"
                }}>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.01,
                            transition: { duration: 0.3 }
                        }}
                        style={{
                            background: "#ffffff",
                            padding: "clamp(24px, 5vw, 48px)",
                            borderRadius: "24px",
                            boxShadow: "0 20px 40px rgba(11, 61, 89, 0.1)",
                            border: "1px solid rgba(11, 61, 89, 0.1)"
                        }}
                    >
                        <h2 style={{
                            fontSize: "clamp(1.5rem, 3vw, 2rem)",
                            fontWeight: 800,
                            color: "#0B3D59",
                            marginBottom: "32px",
                            letterSpacing: "-0.02em"
                        }}>
                            Send Us a Message
                        </h2>

                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#0B3D59",
                                        marginBottom: "8px"
                                    }}>
                                        Name *
                                    </label>
                                    <motion.input
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus("name")}
                                        onBlur={() => handleBlur("name")}
                                        type="text"
                                        required
                                        whileFocus={{ scale: 1.01 }}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: focused.name ? "2px solid #0B3D59" : "2px solid #e0e0e0",
                                            fontSize: "1rem",
                                            color: "#333",
                                            background: "#f8f9fa",
                                            transition: "all 0.3s ease",
                                            outline: "none"
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#0B3D59",
                                        marginBottom: "8px"
                                    }}>
                                        Email *
                                    </label>
                                    <motion.input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus("email")}
                                        onBlur={() => handleBlur("email")}
                                        type="email"
                                        required
                                        whileFocus={{ scale: 1.01 }}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: focused.email ? "2px solid #0B3D59" : "2px solid #e0e0e0",
                                            fontSize: "1rem",
                                            color: "#333",
                                            background: "#f8f9fa",
                                            transition: "all 0.3s ease",
                                            outline: "none"
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#0B3D59",
                                        marginBottom: "8px"
                                    }}>
                                        Phone
                                    </label>
                                    <motion.input
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus("phone")}
                                        onBlur={() => handleBlur("phone")}
                                        type="tel"
                                        whileFocus={{ scale: 1.01 }}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: focused.phone ? "2px solid #0B3D59" : "2px solid #e0e0e0",
                                            fontSize: "1rem",
                                            color: "#333",
                                            background: "#f8f9fa",
                                            transition: "all 0.3s ease",
                                            outline: "none"
                                        }}
                                    />
                                </motion.div>

                                <motion.div
                                    whileFocus={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <label style={{
                                        display: "block",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        color: "#0B3D59",
                                        marginBottom: "8px"
                                    }}>
                                        Message *
                                    </label>
                                    <motion.textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus("message")}
                                        onBlur={() => handleBlur("message")}
                                        required
                                        rows={6}
                                        whileFocus={{ scale: 1.01 }}
                                        style={{
                                            width: "100%",
                                            padding: "14px 18px",
                                            borderRadius: "12px",
                                            border: focused.message ? "2px solid #0B3D59" : "2px solid #e0e0e0",
                                            fontSize: "1rem",
                                            color: "#333",
                                            background: "#f8f9fa",
                                            transition: "all 0.3s ease",
                                            outline: "none",
                                            resize: "vertical",
                                            fontFamily: "inherit"
                                        }}
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: "100%",
                                        padding: "16px 32px",
                                        borderRadius: "12px",
                                        background: isSubmitting ? "#999" : "linear-gradient(135deg, #0B3D59 0%, #0E517A 100%)",
                                        color: "#fff",
                                        fontSize: "1.1rem",
                                        fontWeight: 700,
                                        border: "none",
                                        cursor: isSubmitting ? "not-allowed" : "pointer",
                                        boxShadow: isSubmitting ? "none" : "0 10px 30px rgba(11, 61, 89, 0.3)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "10px",
                                        transition: "all 0.3s ease",
                                        marginTop: "8px"
                                    }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                style={{
                                                    width: "20px",
                                                    height: "20px",
                                                    border: "3px solid rgba(255,255,255,0.3)",
                                                    borderTop: "3px solid white",
                                                    borderRadius: "50%"
                                                }}
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <SendIcon style={{ fontSize: "20px" }} />
                                        </>
                                    )}
                                </motion.button>


                            </div>
                        </form>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        style={{
                            background: "#ffffff",
                            padding: "clamp(24px, 5vw, 48px)",
                            borderRadius: "24px",
                            boxShadow: "0 20px 40px rgba(11, 61, 89, 0.1)",
                            border: "1px solid rgba(11, 61, 89, 0.1)",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            <h2 style={{
                                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                                fontWeight: 800,
                                color: "#0B3D59",
                                marginBottom: "32px",
                                letterSpacing: "-0.02em"
                            }}>
                                Connect With Us
                            </h2>
                            <p style={{
                                fontSize: "1rem",
                                color: "#666",
                                lineHeight: 1.6,
                                marginBottom: "40px"
                            }}>
                                Follow us on social media to stay updated with our latest events, news, and opportunities.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
                                {contactInfo.map((info, index) => (
                                    <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                                        <div style={{
                                            padding: "12px",
                                            borderRadius: "12px",
                                            background: `${info.color}15`,
                                            color: info.color,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0B3D59", margin: "0 0 4px 0" }}>
                                                {info.title}
                                            </h3>
                                            <p style={{ fontSize: "0.95rem", color: "#333", margin: "0 0 2px 0", wordBreak: "break-all" }}>
                                                {info.content}
                                            </p>
                                            {info.subContent && (
                                                <p style={{ fontSize: "0.85rem", color: "#666", margin: 0 }}>
                                                    {info.subContent}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            gap: "16px",
                            flexWrap: "wrap"
                        }}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -4,
                                        rotate: [0, -5, 5, 0]
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        width: "56px",
                                        height: "56px",
                                        borderRadius: "16px",
                                        background: "#f8f9fa",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: social.color,
                                        border: `2px solid ${social.color}20`,
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                    }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{
                                marginTop: "40px",
                                padding: "24px",
                                borderRadius: "16px",
                                background: "linear-gradient(135deg, rgba(11, 61, 89, 0.05) 0%, rgba(14, 81, 122, 0.05) 100%)",
                                border: "1px solid rgba(11, 61, 89, 0.1)"
                            }}
                        >
                            <p style={{
                                fontSize: "0.9rem",
                                color: "#666",
                                lineHeight: 1.6,
                                margin: 0,
                                textAlign: "center"
                            }}>
                                <strong style={{ color: "#0B3D59" }}>Office Hours:</strong><br />
                                Monday - Friday: 9:00 AM - 5:00 PM<br />
                                Saturday: 10:00 AM - 2:00 PM
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
