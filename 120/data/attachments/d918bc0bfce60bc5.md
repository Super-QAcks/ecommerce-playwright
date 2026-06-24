# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tests/E2E.spec.ts >> E2E Tests >> Test Case 14: Place Order: Register while Checkout
- Location: ui/tests/E2E.spec.ts:84:6

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]: Test dummy
        - textbox "Email Address" [ref=e54]: 420test69@gmail.com
        - paragraph [ref=e55]: Email Address already exist!
        - button "Signup" [ref=e56] [cursor=pointer]
  - contentinfo [ref=e57]:
    - generic [ref=e62]:
      - heading "Subscription" [level=2] [ref=e63]
      - generic [ref=e64]:
        - textbox "Your email address" [ref=e65]
        - button "" [ref=e66] [cursor=pointer]:
          - generic [ref=e67]: 
        - paragraph [ref=e68]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e72]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e73]:
    - iframe [ref=e76]:
      - generic [active] [ref=f22e1]:
        - generic [ref=f22e6]:
          - link [ref=f22e7] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CwC6eaF07ar7aE7Glj-8P7NaaqQuLkPuwhwGtkOH24BWZ4MedpCYQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTwAU_Q5vIqjZN9JK3pxMBEob9qCI9XdeblBMd5FoKDnEf-IvBgVSv7vvRfeC5mOuV0nDotS20qyHr-yQKQHNaTqOYM4hpXL-DU629sCIqLMsALnkwi2AuBko6WHwk4oiukYB_Ho22ViIeCGRMUBuKiFu7985dYuylhSzfIuendvbiftYypL8LdRwhmAtqm9mlC3qPYb0UpmxHdXnEz4EDodsPKtBVPrSu4KIU_Aq89IA31eVJHruiV8ff5gCTbJuv5Y4SfS8Raha4FAQ_m4cpX6DELkcHg6C-UExIjOs-NiIeRhkVpYUnxkJnryGaGBvjpxMAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WOW6o7CFn5UDYAGxCcNYH0zm7JtZgAoBmAsByAsBgAwBqg0CR0jIDQHqDRMI8rWksIWflQMVsdLjBx1sqya18A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE&num=1&cid=CAQS8wEAEQoqgewykWRnjlx746d3mCK1Wymat2cGSlpCXiSuVJ8sjSMQi6kilDkQwpSf0DnO6GISpVFjSxRE_L0xjZGhmQfhZTuyEmRW5rM7QGyaNstoGpubXuBLC7jhpSgFk_PKcPmukfsqkr3cbXAqK9TvxOKS_RC_4PU5xe8roIyuU7DZdj0pRXUhJ8KDXUQGEUSKn3qVyZJjfsx2RMTCfKENbDxBUL1arUm71rTIvJ9GrtwzSF4IGCRRWj5G5YcKxUUweH0Q6ykVmWoj7_n9Nt7En7edhtfusLIzNGZLhTnMJxV5qUIBdkVfq3KXrRpd4_6U7UQYAQ&sig=AOD64_3osYEL4d4xh2yXOLy6B1vxgDR_qw&client=ca-pub-1677597403311019&rf=1&nb=9&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf40-4-0725%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE
            - img [ref=f22e8]
          - generic [ref=f22e12]:
            - 'link "The #1 Prop Firm Payout Policy" [ref=f22e14] [cursor=pointer]':
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CwC6eaF07ar7aE7Glj-8P7NaaqQuLkPuwhwGtkOH24BWZ4MedpCYQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTwAU_Q5vIqjZN9JK3pxMBEob9qCI9XdeblBMd5FoKDnEf-IvBgVSv7vvRfeC5mOuV0nDotS20qyHr-yQKQHNaTqOYM4hpXL-DU629sCIqLMsALnkwi2AuBko6WHwk4oiukYB_Ho22ViIeCGRMUBuKiFu7985dYuylhSzfIuendvbiftYypL8LdRwhmAtqm9mlC3qPYb0UpmxHdXnEz4EDodsPKtBVPrSu4KIU_Aq89IA31eVJHruiV8ff5gCTbJuv5Y4SfS8Raha4FAQ_m4cpX6DELkcHg6C-UExIjOs-NiIeRhkVpYUnxkJnryGaGBvjpxMAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WOW6o7CFn5UDYAGxCcNYH0zm7JtZgAoBmAsByAsBgAwBqg0CR0jIDQHqDRMI8rWksIWflQMVsdLjBx1sqya18A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE&num=1&cid=CAQS8wEAEQoqgewykWRnjlx746d3mCK1Wymat2cGSlpCXiSuVJ8sjSMQi6kilDkQwpSf0DnO6GISpVFjSxRE_L0xjZGhmQfhZTuyEmRW5rM7QGyaNstoGpubXuBLC7jhpSgFk_PKcPmukfsqkr3cbXAqK9TvxOKS_RC_4PU5xe8roIyuU7DZdj0pRXUhJ8KDXUQGEUSKn3qVyZJjfsx2RMTCfKENbDxBUL1arUm71rTIvJ9GrtwzSF4IGCRRWj5G5YcKxUUweH0Q6ykVmWoj7_n9Nt7En7edhtfusLIzNGZLhTnMJxV5qUIBdkVfq3KXrRpd4_6U7UQYAQ&sig=AOD64_3osYEL4d4xh2yXOLy6B1vxgDR_qw&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf40-4-0725%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE
            - link "No scaling plan? No minimum days till withdrawal? No waiting? Now get daily payouts in PRO" [ref=f22e17] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CwC6eaF07ar7aE7Glj-8P7NaaqQuLkPuwhwGtkOH24BWZ4MedpCYQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTwAU_Q5vIqjZN9JK3pxMBEob9qCI9XdeblBMd5FoKDnEf-IvBgVSv7vvRfeC5mOuV0nDotS20qyHr-yQKQHNaTqOYM4hpXL-DU629sCIqLMsALnkwi2AuBko6WHwk4oiukYB_Ho22ViIeCGRMUBuKiFu7985dYuylhSzfIuendvbiftYypL8LdRwhmAtqm9mlC3qPYb0UpmxHdXnEz4EDodsPKtBVPrSu4KIU_Aq89IA31eVJHruiV8ff5gCTbJuv5Y4SfS8Raha4FAQ_m4cpX6DELkcHg6C-UExIjOs-NiIeRhkVpYUnxkJnryGaGBvjpxMAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WOW6o7CFn5UDYAGxCcNYH0zm7JtZgAoBmAsByAsBgAwBqg0CR0jIDQHqDRMI8rWksIWflQMVsdLjBx1sqya18A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE&num=1&cid=CAQS8wEAEQoqgewykWRnjlx746d3mCK1Wymat2cGSlpCXiSuVJ8sjSMQi6kilDkQwpSf0DnO6GISpVFjSxRE_L0xjZGhmQfhZTuyEmRW5rM7QGyaNstoGpubXuBLC7jhpSgFk_PKcPmukfsqkr3cbXAqK9TvxOKS_RC_4PU5xe8roIyuU7DZdj0pRXUhJ8KDXUQGEUSKn3qVyZJjfsx2RMTCfKENbDxBUL1arUm71rTIvJ9GrtwzSF4IGCRRWj5G5YcKxUUweH0Q6ykVmWoj7_n9Nt7En7edhtfusLIzNGZLhTnMJxV5qUIBdkVfq3KXrRpd4_6U7UQYAQ&sig=AOD64_3osYEL4d4xh2yXOLy6B1vxgDR_qw&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf40-4-0725%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE
              - text: No scaling plan? No minimum days till withdrawal? No waiting? Now get daily
              - text: payouts in PRO
            - link "Take Profit Trader" [ref=f22e20] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CwC6eaF07ar7aE7Glj-8P7NaaqQuLkPuwhwGtkOH24BWZ4MedpCYQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTwAU_Q5vIqjZN9JK3pxMBEob9qCI9XdeblBMd5FoKDnEf-IvBgVSv7vvRfeC5mOuV0nDotS20qyHr-yQKQHNaTqOYM4hpXL-DU629sCIqLMsALnkwi2AuBko6WHwk4oiukYB_Ho22ViIeCGRMUBuKiFu7985dYuylhSzfIuendvbiftYypL8LdRwhmAtqm9mlC3qPYb0UpmxHdXnEz4EDodsPKtBVPrSu4KIU_Aq89IA31eVJHruiV8ff5gCTbJuv5Y4SfS8Raha4FAQ_m4cpX6DELkcHg6C-UExIjOs-NiIeRhkVpYUnxkJnryGaGBvjpxMAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WOW6o7CFn5UDYAGxCcNYH0zm7JtZgAoBmAsByAsBgAwBqg0CR0jIDQHqDRMI8rWksIWflQMVsdLjBx1sqya18A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE&num=1&cid=CAQS8wEAEQoqgewykWRnjlx746d3mCK1Wymat2cGSlpCXiSuVJ8sjSMQi6kilDkQwpSf0DnO6GISpVFjSxRE_L0xjZGhmQfhZTuyEmRW5rM7QGyaNstoGpubXuBLC7jhpSgFk_PKcPmukfsqkr3cbXAqK9TvxOKS_RC_4PU5xe8roIyuU7DZdj0pRXUhJ8KDXUQGEUSKn3qVyZJjfsx2RMTCfKENbDxBUL1arUm71rTIvJ9GrtwzSF4IGCRRWj5G5YcKxUUweH0Q6ykVmWoj7_n9Nt7En7edhtfusLIzNGZLhTnMJxV5qUIBdkVfq3KXrRpd4_6U7UQYAQ&sig=AOD64_3osYEL4d4xh2yXOLy6B1vxgDR_qw&client=ca-pub-1677597403311019&rf=1&nb=1&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf40-4-0725%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE
          - link "Open" [ref=f22e23] [cursor=pointer]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CwC6eaF07ar7aE7Glj-8P7NaaqQuLkPuwhwGtkOH24BWZ4MedpCYQASD9tJ6VAWChAqAB9oHCtSjIAQmoAwHIA8sEqgTwAU_Q5vIqjZN9JK3pxMBEob9qCI9XdeblBMd5FoKDnEf-IvBgVSv7vvRfeC5mOuV0nDotS20qyHr-yQKQHNaTqOYM4hpXL-DU629sCIqLMsALnkwi2AuBko6WHwk4oiukYB_Ho22ViIeCGRMUBuKiFu7985dYuylhSzfIuendvbiftYypL8LdRwhmAtqm9mlC3qPYb0UpmxHdXnEz4EDodsPKtBVPrSu4KIU_Aq89IA31eVJHruiV8ff5gCTbJuv5Y4SfS8Raha4FAQ_m4cpX6DELkcHg6C-UExIjOs-NiIeRhkVpYUnxkJnryGaGBvjpxMAE1-KpptIFiAXsz7mWV6AGLoAH9rmSlQOoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WOW6o7CFn5UDYAGxCcNYH0zm7JtZgAoBmAsByAsBgAwBqg0CR0jIDQHqDRMI8rWksIWflQMVsdLjBx1sqya18A0CiA4JsA6vq_b5GNgTC9AVAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgLvThguIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE&num=1&cid=CAQS8wEAEQoqgewykWRnjlx746d3mCK1Wymat2cGSlpCXiSuVJ8sjSMQi6kilDkQwpSf0DnO6GISpVFjSxRE_L0xjZGhmQfhZTuyEmRW5rM7QGyaNstoGpubXuBLC7jhpSgFk_PKcPmukfsqkr3cbXAqK9TvxOKS_RC_4PU5xe8roIyuU7DZdj0pRXUhJ8KDXUQGEUSKn3qVyZJjfsx2RMTCfKENbDxBUL1arUm71rTIvJ9GrtwzSF4IGCRRWj5G5YcKxUUweH0Q6ykVmWoj7_n9Nt7En7edhtfusLIzNGZLhTnMJxV5qUIBdkVfq3KXrRpd4_6U7UQYAQ&sig=AOD64_3osYEL4d4xh2yXOLy6B1vxgDR_qw&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://try.takeprofittrader.com/funded-trader-mff-nf40-4-0725%3Fgc_id%3D23396595761%26h_ad_id%3D%26gad_source%3D5%26gad_campaignid%3D23400966124%26gclid%3DEAIaIQobChMIvq6ksIWflQMVsdLjBx1sqya1EAEYASAAEgLoFPD_BwE
            - generic [ref=f22e24]:
              - generic [ref=f22e26]: Open
              - generic [ref=f22e28]:
                - img [ref=f22e29]
                - img [ref=f22e31]
        - img [ref=f22e39] [cursor=pointer]
        - button [ref=f22e41] [cursor=pointer]:
          - img [ref=f22e42]
        - iframe
```