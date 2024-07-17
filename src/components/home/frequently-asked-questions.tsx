import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function FrequentlyAskedQuestions() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Get answers to your most common questions about our products,
              shipping, and more.
            </p>
          </div>
          <div className="space-y-6">
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                What is your return policy?
                <ChevronRightIcon className="h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="py-4 text-muted-foreground">
                  We offer a 30-day return policy on all of our products. If
                  you're not satisfied with your purchase, you can return it for
                  a full refund, no questions asked. Simply contact our customer
                  support team to initiate a return.
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                How long does shipping take?
                <ChevronRightIcon className="h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="py-4 text-muted-foreground">
                  We offer a variety of shipping options to ensure your order
                  arrives quickly. Standard shipping typically takes 5-7
                  business days, while expedited shipping is available for
                  delivery in 2-3 business days. We also offer free shipping on
                  all orders over $50.
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                What are the product dimensions?
                <ChevronRightIcon className="h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="py-4 text-muted-foreground">
                  The dimensions for each of our products can be found on the
                  individual product pages. We strive to provide accurate and
                  detailed information to help you make the best purchasing
                  decision. If you have any specific questions about a product's
                  size or fit, please don't hesitate to contact our customer
                  support team.
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Do you offer any warranties?
                <ChevronRightIcon className="h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="py-4 text-muted-foreground">
                  Yes, we offer a 1-year warranty on all of our products. If you
                  experience any issues with your purchase, please contact our
                  customer support team and we'll be happy to assist you. We
                  stand behind the quality of our products and want to ensure
                  you're completely satisfied with your purchase.
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                How do I contact customer support?
                <ChevronRightIcon className="h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="py-4 text-muted-foreground">
                  You can reach our customer support team by email at
                  support@company.com or by phone at 1-800-555-1234. Our support
                  team is available Monday through Friday, 9am to 5pm EST. We're
                  here to help with any questions or concerns you may have about
                  your order or our products.
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
