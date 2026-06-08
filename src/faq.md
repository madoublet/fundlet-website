---
layout: faq.njk
title: FAQ
description: Read our FAQ to learn more about Fundlet.
---

## Campaigns and Setup

<details class="faq-item">
<summary>How do I create and activate a new campaign?</summary>

**Short answer:** Campaigns are created and activated directly inside the Fundlet app.

**Details:**

A Fundlet campaign works much like a Shopify page or product. To launch one:

- Go to **Campaign List**
- Click **Add a Campaign**
- Configure campaign details:
  - Name, description, and branding (hero image, logo, primary color)
  - Fundraising goal and payout settings
  - Linked Shopify collection(s) or hand-picked products
  - Optional start and end dates
  - Contact email for notifications
- Click **Activate**

Once activated, Fundlet automatically creates a discount code for order tracking and the campaign is immediately live.

📺 **Watch:**
- [Create Your First Campaign (Part 1)](https://www.youtube.com/watch?v=P-39Nd9xclA)
- [End-to-End Walkthrough](https://www.youtube.com/watch?v=RNY4Yh6id4w)

</details>

<details class="faq-item">
<summary>What is the campaign limit?</summary>

**Short answer:** Paid plans allow unlimited campaigns; the free plan allows up to 2 active campaigns.

**Details:**

- **Paid plans:** Unlimited active campaigns  
- **Free plan:** 2 active campaigns  

Inactive campaigns do not count toward your plan limits.

</details>

<details class="faq-item">
<summary>What happens if a campaign exceeds its plan’s order limit?</summary>

**Short answer:** Your campaign continues running and you’ll be prompted to upgrade.

**Details:**

- No active campaigns are paused
- No orders are lost
- You can upgrade at any time to continue tracking new orders

This ensures fundraisers are never disrupted mid-campaign.

</details>

<details class="faq-item">
<summary>Can I use Fundlet with my existing storefront or collections?</summary>

**Short answer:** Yes—Fundlet is designed to integrate seamlessly with your existing Shopify store.

**Details:**

You can use Fundlet with:
- Existing product pages
- Shopify collection pages
- Embedded widgets
- Redirects from older pages to campaign pages

This allows you to launch fundraisers without restructuring your store.

📺 **Watch:**  
- [Setup Your Storefront (Part 2)](https://www.youtube.com/watch?v=KLyatXgPyac)  
- [Use Existing Product Page](https://www.youtube.com/watch?v=A71g8bMGS9M)  
- [Display Fundraiser on Collection Page](https://www.youtube.com/watch?v=Scj78tjU200)

</details>

<details class="faq-item">
<summary>Why don’t some product images (like sizing charts) appear in the campaign pop-up?</summary>

**Short answer:** Fundlet displays **variant-level images**, not just main product images.

**Details:**

If images are missing:
- Ensure images are assigned to each product **variant**
- Not only the main product gallery

This is common with sizing charts, colors, or style-specific imagery.

📺 **Watch:**  
- [Setup Your Storefront (Part 2)](https://www.youtube.com/watch?v=KLyatXgPyac)

</details>

<details class="faq-item">
<summary>Why is the “Customize” button missing when creating a template?</summary>

**Short answer:** Shopify renamed **Customize** to **Edit Theme**.

**Details:**

The functionality is the same—the label was updated by Shopify.

📺 **Watch:**
- [Create Custom Theme Templates](https://www.youtube.com/watch?v=FGiM4CfIa4I)

</details>

<details class="faq-item">
<summary>I'm getting a 404 error when trying to view my fundraiser page. How do I fix this?</summary>

**Short answer:** A 404 error is typically caused by a theme change or update that removes the campaign template setup.

**Details:**

When a theme is changed or updated, the campaign template configuration is lost. Set up the template again in the Shopify Theme Editor and the page should display correctly.

</details>

<details class="faq-item">
<summary>How do I hide my store's header and footer to keep the fundraiser page simpler?</summary>

**Short answer:** Only modify the **Template** portion of the theme editor—not the Header section.

**Details:**

Changes made to the Header section are applied across your entire website. To hide the header and footer only on the fundraiser page, limit your edits to the Template section of the Shopify Theme Editor.

</details>

<details class="faq-item">
<summary>How do I add my products to the campaign pages?</summary>

**Short answer:** Add your products to the specific collection the campaign page is configured to pull from.

**Details:**

Campaign pages are typically set to display products from a specific collection (for example, a “Fuel Your Season” collection). To make products appear on the campaign page, add them to that collection.

</details>

<details class="faq-item">
<summary>Can I use older Shopify themes with all Fundlet features, like the Product block?</summary>

**Short answer:** No—the Fundlet Product block is not compatible with older Shopify themes.

**Details:**

The Fundlet Product block feature requires a modern Shopify theme. If you are using an older theme, you will need to upgrade to a supported theme to use this feature.

</details>

<details class="faq-item">
<summary>Can I set a start and end date for my campaign?</summary>

**Short answer:** Yes—campaigns support optional date ranges with a live countdown timer on the storefront.

**Details:**

Enable the **Set Date Range** option on a campaign to configure start and end dates. When active:

- The storefront blocks can display a live countdown timer (days, hours, minutes, seconds)
- The countdown label and end message text are fully customizable in the theme editor

If no date range is set, the campaign runs indefinitely until you manually deactivate it.

</details>

<details class="faq-item">
<summary>Where can I find a full start-to-finish walkthrough?</summary>

**Short answer:** The End-to-End Walkthrough covers everything from setup to reporting.

**Details:**

This video walks through:
- Campaign creation
- Storefront setup
- Sales tracking
- Reporting and exports

📺 **Watch:**  
- [End-to-End Walkthrough](https://www.youtube.com/watch?v=RNY4Yh6id4w)

</details>

## Order Tracking and Discounts

<details class="faq-item">
<summary>How does Fundlet track orders?</summary>

**Short answer:** Fundlet supports multiple order tracking methods—discount codes are the default, but cart attributes and line item properties are also supported.

**Details:**

Fundlet tracks orders through one or more of these mechanisms:

- **Discount codes** (default) – A unique code like `FUNDLET_ABCD1234` is applied at checkout. This is visible to the customer as a line item but requires no additional setup.
- **Cart attributes** – A hidden cart attribute tags the session without displaying a discount code at checkout. Useful when you want invisible tracking or have discount conflicts.
- **Line item properties** – Individual line items are tagged with the campaign code at the time they are added to the cart.
- **Product metafield** – Products can be permanently linked to a campaign via the `fundlet.campaign` metafield, automatically attributing all sales of that product.

When an order comes in, Fundlet also applies Shopify order tags (e.g., `FUNDLET_ABCD1234`) for easy filtering in Shopify's native order views.

📺 **Watch:**
- [Sales Walkthrough (Part 3)](https://www.youtube.com/watch?v=KUwFt9E6PRI)
- [Use Discount Codes](https://www.youtube.com/watch?v=sNinQc-WOGQ)

</details>

<details class="faq-item">
<summary>How can I prevent automatic discounts from overriding Fundlet discounts?</summary>

**Short answer:** Enable discount stacking or exclude fundraiser products from automatic discounts.

**Details:**

You can:
- Enable **discount stacking** on both discounts
- Use **unlisted fundraiser products** to avoid conflicts

📺 **Watch:**  
- [Use Discount Codes](https://www.youtube.com/watch?v=sNinQc-WOGQ)  
- [Use Unlisted Shopify Products](https://www.youtube.com/watch?v=le_kiVkm7c8)

</details>

<details class="faq-item">
<summary>Can I manually add an order to a fundraiser after checkout?</summary>

**Short answer:** Yes, orders can be retroactively added to a campaign.

**Details:**

This is useful when:
- A discount code wasn’t applied
- A participant wasn’t properly attributed
- An order needs correction

📺 **Watch:**  
- [Add an Existing Order to a Campaign](https://www.youtube.com/watch?v=E6uxXRt4REo)

</details>

<details class="faq-item">
<summary>What is the recommended cart setting for Fundlet?</summary>

**Short answer:** Enable **Reload page on Add to Cart?**

**Details:**

This:
- Ensures items appear correctly in the cart
- Prevents sync issues with modals
- Often improves conversion rates

📺 **Watch:**  
- [Setup Your Storefront (Part 2)](https://www.youtube.com/watch?v=KLyatXgPyac)

</details>

## Participants and Payouts

<details class="faq-item">
<summary>How are sales tracked for individual participants?</summary>

**Short answer:** Fundlet tracks sales at both the organization level *and* the individual participant level.

**Details:**

- **Organization level** – Tracks total fundraiser performance  
- **Individual participant level** – Tracks sales using unique referral links  

**Each participant:**

- Has a unique referral link  
- Is automatically tagged on orders  
- Appears in exportable reports  

📺 **Watch:**  
- [Onboard Participants](https://www.youtube.com/watch?v=qyF5mhqtfOc)

</details>

<details class="faq-item">
<summary>What is the recommended size for participant-based fundraisers?</summary>

**Short answer:** Fundlet works best for groups with 5–25 participants.

**Details:**

This range provides:
- Clear accountability
- Simple reporting
- Strong participant engagement

</details>

<details class="faq-item">
<summary>How many participants can Fundlet handle in a single campaign?</summary>

**Short answer:** Up to about 250 participants; for 500 or more, enable the participant Metaobject option.

**Details:**

- **Up to ~250 participants:** Works with the standard setup
- **500+ participants:** Enable the participant **Metaobject** option, which provides a dedicated management UI and is designed to scale to larger groups

</details>

<details class="faq-item">
<summary>How does Fundlet attribute a sale when a supporter clicks around the site and purchases a non-campaign item?</summary>

**Short answer:** Fundlet tracks sales using line item properties and a discount code applied when the supporter lands on the fundraiser page.

**Details:**

When a supporter visits a participant's link, a discount code is applied that tags the session. You can configure a setting to either **include or exclude** items purchased off the campaign page when calculating attribution.

</details>

<details class="faq-item">
<summary>How can I ensure a customer selects a participant when using a single QR code or group link?</summary>

**Short answer:** Use the Fundlet Message Block with the **Require Selection** option enabled.

**Details:**

- Add the **Fundlet Message Block** to the campaign page
- This allows supporters to select a participant before continuing
- Enable the **Require Selection** option to hide the rest of the campaign page until a participant is chosen

</details>

<details class="faq-item">
<summary>If I manually add a participant to an order, will the leaderboard update?</summary>

**Short answer:** Yes—a fix was pushed to automatically recalculate participant values when added to an order.

**Details:**

This was previously a bug where the leaderboard would not recalculate automatically. After the fix, adding a participant to an order will update their totals. You can also use the **Recalculate Participant** option in the **More Actions** menu to fix totals that have gotten out of sync.

</details>

<details class="faq-item">
<summary>How do I give an organizer access to manage their campaign?</summary>

**Short answer:** Use the Share Dashboard feature to generate a PIN-protected organizer dashboard.

**Details:**

The **Share Dashboard** feature creates a dedicated organizer view that doesn't require Shopify admin access. The organizer receives a URL and PIN to log in. From their dashboard they can:

- View campaign totals (orders, items, sales, payout)
- Browse and manage the participant list
- See their current payout tier level

This is ideal for coaches, team managers, or external organizers who need visibility into campaign performance without access to your Shopify admin.

📺 **Watch:**
- [Share Campaign Dashboard](https://www.youtube.com/watch?v=vscI5EP2dKk)

</details>

<details class="faq-item">
<summary>Are there tools to help participants onboard themselves?</summary>

**Short answer:** Yes—Fundlet includes a self-registration form that participants fill out directly on the campaign page.

**Details:**

Add the **Fundlet Participant Form** block to your campaign page template to enable self-registration. Participants visit the campaign page and complete the form, which can collect:

- Name (required) and email (required)
- Profile photo (optional)
- Group or team (optional, if participant groups are configured)
- A consent checkbox (optional, with customizable label)
- A bio or notes field (optional)

After submitting, the participant immediately receives an email with their unique referral link. Their totals are tracked automatically from that point forward.

You can also password-protect registration if you only want authorized participants to sign up.

📺 **Watch:**
- [Onboard Participants](https://www.youtube.com/watch?v=qyF5mhqtfOc)
- [Share Campaign Dashboard](https://www.youtube.com/watch?v=vscI5EP2dKk)

</details>

<details class="faq-item">
<summary>Can I organize participants into groups or teams?</summary>

**Short answer:** Yes—campaigns support configurable participant groups.

**Details:**

Enable **Participant Groups** in campaign settings and define your group options (for example: "Varsity", "JV", "Alumni"). You can also customize the label for the group field.

Once enabled:
- Admins can assign participants to groups when adding them manually
- The self-registration form includes a group dropdown for participants to select their own team
- Groups can be used to filter and organize participant reporting

</details>

<details class="faq-item">
<summary>Can payouts vary by product or performance?</summary>

**Short answer:** Yes—payouts can be customized per product or variant, and scaled automatically using revenue tiers.

**Details:**

**Per-product and per-variant exceptions:** Override the base payout rate for specific products or individual variants. For example, a base rate of 10% but a specific product pays a flat $5 per item, and a specific variant of another product pays 20%.

**Tiered payouts:** Define up to three revenue thresholds that unlock higher payout rates as a participant's sales grow. For example:
- Tier 1: Reach $1,000 in sales → 10% payout
- Tier 2: Reach $5,000 in sales → 15% payout
- Tier 3: Reach $10,000 in sales → 20% payout

Tiers are calculated per participant, so high performers are automatically rewarded with better rates.

📺 **Watch:**
- [Create Custom Payouts](https://www.youtube.com/watch?v=JPphNtHhzHM)
- [Implement Payout Tiers](https://www.youtube.com/watch?v=BrZYgzuOA_k)

</details>

<details class="faq-item">
<summary>Can I set different payout exceptions for different product variants?</summary>

**Short answer:** Yes, variant-level payout exceptions are supported.

**Details:**

You can configure payout exceptions at the **variant level** (for example, a $5 variant pays out $5 and a $100 variant pays out $100). Previously this feature only supported exceptions at the product level.

</details>

<details class="faq-item">
<summary>If I update my payout settings, will the change apply to historical, fulfilled orders?</summary>

**Short answer:** Yes, updating campaign settings recalculates payouts for historical orders in real time.

**Details:**

- Updating payout settings recalculates historical order payouts automatically
- Recalculating **participant sales** is a separate manual process, accessible via the **More Actions** menu

</details>

<details class="faq-item">
<summary>Does Fundlet's payout calculation include shipping or tax?</summary>

**Short answer:** No—payouts are based strictly on the line item price.

**Details:**

Shipping and tax are excluded from payout calculations. Only the line item price is used.

</details>

<details class="faq-item">
<summary>Can I set different payout rates for different phases of a campaign (e.g., 25% for the first two weeks, then 10%)?</summary>

**Short answer:** No—Fundlet supports only one payout rate per campaign.

**Details:**

Fundlet calculates payouts on the fly based on the line items in the campaign. You cannot configure two different rates within a single campaign.

</details>

<details class="faq-item">
<summary>A product has over 250 variants and some options are disabled or unclickable on the fundraiser page.</summary>

**Short answer:** This is a Shopify API limitation—the API used by Fundlet has a 250-variant limit.

**Details:**

A potential workaround is to use **custom fields** for product options (such as flavors) and apply them to the product using a tag, reducing the number of variants needed.

</details>

<details class="faq-item">
<summary>How are payouts handled?</summary>

**Short answer:** Shopify processes the orders, and payouts are handled directly by your shop.

**Details:**

Fundlet does **not** move money or take control of payments.

- Orders are placed and paid for through Shopify as normal
- Funds are deposited into your existing Shopify payment account
- You control how and when funds are distributed to organizers or participants

Fundlet focuses on **tracking, reporting, and payout calculations**, while payment distribution remains fully in your control.

</details>

## Leaderboard and Reporting

<details class="faq-item">
<summary>My sales are not showing on the leaderboard.</summary>

**Short answer:** The leaderboard only tracks sales by participant—not sales tracked via custom fields.

**Details:**

- Sales tracked using custom fields instead of actual participants will not appear on the leaderboard
- If you are using your own product page, you must also have the **Fundlet Product block** installed for sales to be attributed correctly

</details>

<details class="faq-item">
<summary>The leaderboard disappears when a user visits an individual participant's link.</summary>

**Short answer:** Enable the leaderboard display setting on the Fundlet Collection block.

**Details:**

There is a setting on the **Fundlet Collection block** that controls whether the leaderboard is shown on individual participant pages. Enable this setting to keep the leaderboard visible.

</details>

<details class="faq-item">
<summary>Can I limit the leaderboard to display only the top 10 or 20 sellers?</summary>

**Short answer:** Not yet—but limiting the leaderboard display is a planned feature.

**Details:**

Currently all participants appear on the scrolling leaderboard. An option to limit the display to a set number of top sellers is on the roadmap.

</details>

<details class="faq-item">
<summary>What CSV reports can I export from Fundlet?</summary>

**Short answer:** Fundlet provides four CSV exports from the campaign dashboard.

**Details:**

- **Orders CSV** – Full order-level detail including order number, financial and fulfillment status, participant, line items, quantities, unit prices, totals, payouts, and any custom fields.
- **Participants CSV** – One row per participant with their name, email, campaign code, total orders, total items, total sales, payout amount, and their unique referral URL. Recalculated at export time from paid orders.
- **Pick List CSV** – Organized by participant, this report groups all ordered items under each participant's name (with an "Unassigned" section for orders not linked to a participant). Useful for fulfillment and packing.
- **Thank You CSV** – A deduplicated list of customer names and emails across all orders. Useful for post-campaign follow-up or thank-you messages.

</details>

<details class="faq-item">
<summary>I'm having trouble downloading a CSV export.</summary>

**Short answer:** Try using a different browser—the download should appear automatically.

**Details:**

If a CSV export is not downloading, switching to a different browser typically resolves the issue.

</details>

## Features and Updates

<details class="faq-item">
<summary>Can I add custom fields to track additional information on orders?</summary>

**Short answer:** Yes—campaigns support up to two custom fields that appear in your order exports.

**Details:**

In campaign settings you can define **Custom Field 1** and **Custom Field 2** keys. These map to line item properties or cart attributes on the order, and are pulled through into all CSV exports (Orders CSV and Pick List CSV) as dedicated columns.

This is useful for tracking things like team names, event codes, or any other custom data you collect at checkout.

</details>

<details class="faq-item">
<summary>Can I use Fundlet to set up minimum donation amounts or round-up donations at checkout?</summary>

**Short answer:** No—these features are not currently supported.

**Details:**

Fundlet does not currently support round-up donations or a minimum donation amount where customers can pay more than a fixed price. A common workaround is to create product variants at different price points (for example, $10, $20, and $30 donation options).

</details>

<details class="faq-item">
<summary>Can I hide the Fundlet tracking code that shows up as a "discount" at checkout?</summary>

**Short answer:** Yes—switch to Cart Attributes tracking to remove the visible discount code from checkout.

**Details:**

By default, Fundlet applies a discount code (e.g., `FUNDLET_ABCD1234`) that appears as a line item at checkout. If you don't want this visible to customers:

- Disable the discount code option in your campaign settings
- Enable **Cart Attributes** tracking instead

Cart attributes tag the order session invisibly without displaying anything at checkout, while still fully attributing orders to the correct campaign and participant.

</details>

<details class="faq-item">
<summary>What emails does Fundlet send automatically?</summary>

**Short answer:** Fundlet sends two automatic emails: one when a campaign is activated, and one when a participant registers.

**Details:**

- **Campaign created email** – Sent to the campaign contact email when a campaign is first activated. Includes the campaign name and shop details.
- **New participant email** – Sent to the participant immediately after they register (via the self-onboarding form or when added manually by an admin). Includes their unique referral link.

Both email templates are fully customizable in **Settings**. You can edit the subject line and the full HTML body, and use placeholders like `{campaign_name}`, `{link}`, and `{shop_name}` to personalize the content. Email notifications can also be disabled globally in Settings if you prefer to handle communications yourself.

</details>

<details class="faq-item">
<summary>I am missing email notifications for campaign sign-ups.</summary>

**Short answer:** Check that a contact email is set on the campaign and that notifications are enabled in Settings.

**Details:**

- Confirm that **Send Notifications** is enabled in **Settings**
- Check that your campaign has a **Contact Email** configured—this is where campaign-level notifications are sent
- If emails were previously routing to your store's default email instead of your contact email, this was a known bug that has since been fixed

</details>