import { BuyButton } from "@/components/subscription";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BASIC_PLAN, PRO_PLAN } from "@/lib/constants";

const PricingPage = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center gap-3 my-4">
      <Card>
        <CardHeader>
          <CardTitle>{BASIC_PLAN.plan_name}</CardTitle>
          <CardDescription>{BASIC_PLAN.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {BASIC_PLAN.featureList.map((feature) => (
            <li key={feature.id}>{feature.feature}</li>
          ))}
        </CardContent>
        <CardFooter>
          <BuyButton productId={BASIC_PLAN.variant_id} />
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{PRO_PLAN.plan_name}</CardTitle>
          <CardDescription>{PRO_PLAN.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {PRO_PLAN.featureList.map((feature) => (
            <li key={feature.id}>{feature.feature}</li>
          ))}
        </CardContent>
        <CardFooter>
          <BuyButton productId={PRO_PLAN.variant_id} />
        </CardFooter>
      </Card>
    </div>
  );
};

export default PricingPage;
