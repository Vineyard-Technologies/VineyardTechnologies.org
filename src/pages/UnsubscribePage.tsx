import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

function UnsubscribeForm() {
  const [state, handleSubmit] = useForm("mpwoobbr");
  const [osrsChecked, setOsrsChecked] = useState(false);
  const [eveChecked, setEveChecked] = useState(false);

  const handleSelectAll = () => {
    const newValue = !osrsChecked || !eveChecked;
    setOsrsChecked(newValue);
    setEveChecked(newValue);
  };
  
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Unsubscribe Successful</CardTitle>
            <CardDescription>
              Your unsubscribe request has been processed. We're sorry to see you go!
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: 'url(/images/unsubscribe.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Unsubscribe from Vineyard Technologies Emails</CardTitle>
          <CardDescription>
            Select which email lists you'd like to unsubscribe from
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="your.email@example.com"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Email Lists</Label>
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  onClick={handleSelectAll}
                  className="h-auto p-0 text-sm"
                >
                  Select All
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="osrs-newsletter" 
                  name="osrs-newsletter"
                  value="Old School Runescape Market Analysis Newsletter"
                  checked={osrsChecked}
                  onCheckedChange={(checked) => setOsrsChecked(checked as boolean)}
                />
                <label
                  htmlFor="osrs-newsletter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Old School Runescape Market Analysis Newsletter
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="eve-newsletter" 
                  name="eve-newsletter"
                  value="Eve Online Market Analysis Newsletter"
                  checked={eveChecked}
                  onCheckedChange={(checked) => setEveChecked(checked as boolean)}
                />
                <label
                  htmlFor="eve-newsletter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Eve Online Market Analysis Newsletter
                </label>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={state.submitting}
              className="w-full"
            >
              {state.submitting ? 'Submitting...' : 'Unsubscribe'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function UnsubscribePage() {
  return <UnsubscribeForm />;
}

export default UnsubscribePage;
