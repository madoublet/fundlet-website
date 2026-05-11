---
layout: page.njk
title: How to Add an Existing Order to a Fundlet Campaign
description: Retroactively tag any Shopify order so it appears as part of a campaign — useful when a supporter bought directly from your store instead of through the campaign page.
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/E6uxXRt4REo" frameborder="0" allowfullscreen></iframe>

---

## Overview

If someone purchases directly from your store without going through a campaign link, you can retroactively tag that order so it counts toward a campaign. This is done by adding Shopify order tags directly to the order.

---

## Step 1: Find the Order in Shopify

Go to your Shopify **Orders** and open the order you want to add to a campaign.

---

## Step 2: Add the Campaign Tag

In the order's **Tags** field, type the campaign tag (e.g. `fundlet-order-trial`). Because the tag already exists from previous orders, it will appear in the autocomplete — select it and save. The order will now appear in that campaign inside Fundlet.

---

## Step 3: Add the Override Tag (If the Campaign Excludes Outside Orders)

Some campaigns are configured to exclude orders that weren't placed through the campaign page. To force-include an order in those campaigns, add a second tag: **`fundlet-override-exclude`**.

With both tags applied — the campaign tag and `fundlet-override-exclude` — the order will be included in the campaign regardless of the exclude setting.

---

## Verify in Fundlet

Jump back into the Fundlet app and open the campaign. The order should now appear in the campaign's order list with the updated totals.
