import React from "react";
import Head from "next/head";

interface SEOHeadProps {
    title?: string;
    description?: string;
}

const SEOHead: React.FC<SEOHeadProps> = (
    {
        title = "ShopScout",
        description = "AI Powered Shopping Assistant"
    }) => {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />

            {/* PWA Settings */}
            <link rel="manifest" href="/manifest.json" />
            <meta name="theme-color" content="#ecece9" />

            {/* iOS Specific Settings (Crucial for "App-like" feel) */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="ShopScout" />
            <link rel="apple-touch-icon" href="/scout.png" />

            {/* Optional: Add a startup image for iOS to prevent white screen flash */}
            <link rel="apple-touch-startup-image" href="/scout.png" />
        </Head>
    );
};

export default SEOHead;