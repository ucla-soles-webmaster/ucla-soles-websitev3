import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Sponsors.css"
import CoverSection from "./CoverPhoto.js";
import sponsorsCoverImg from "../photos/covers/sponsorscover.png"

export default function Sponsors() {
    return (
        <div className="sponsors">
            <CoverSection title="Our Sponsors" imageUrl={sponsorsCoverImg} />
            <h1> We Love our Sponsors</h1>
            <h2> SOLES|SHPE at UCLA relies on its industry partners and corporate relations to help elevate their efforts in empowering the Latinx engineering community at UCLA. Through generous contributions of monetary donations, technical supplies, and company merch, SOLES can help eliminate thr financial instability for its members and give back to the community that supports it.

In addition to uplifting community outreach efforts, professional and academic development, and recruitment initiatives, SOLES looks for Sponsorship to expand on its SOLES Scholarship Fund to help those most impacted by the current world circumstances (an initiative recently developed that only utilizes fundrasing until corporate support is obtained).</h2>
        </div>
    )
}