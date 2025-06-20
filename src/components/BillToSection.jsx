
import React from 'react';
import FloatingLabelInput from './FloatingLabelInput';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const BillToSection = ({ billTo, handleInputChange, selectedCurrency, setSelectedCurrency }) => {
  return (
    <div className="mb-6">
      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2 text-slate-700">Select Currency</h3>
        <RadioGroup
          value={selectedCurrency}
          onValueChange={setSelectedCurrency}
          className="flex space-x-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="BDT" id="bdt" className="border-emerald-500 text-emerald-500" />
            <Label htmlFor="bdt" className="text-slate-700 font-medium">BDT (৳)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="USD" id="usd" className="border-emerald-500 text-emerald-500" />
            <Label htmlFor="usd" className="text-slate-700 font-medium">USD ($)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="INR" id="inr" className="border-emerald-500 text-emerald-500" />
            <Label htmlFor="inr" className="text-slate-700 font-medium">INR (₹)</Label>
          </div>
        </RadioGroup>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-slate-800">Bill To</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FloatingLabelInput
          id="billToName"
          label="Name"
          value={billTo.name}
          onChange={handleInputChange}
          name="name"
        />
        <FloatingLabelInput
          id="billToPhone"
          label="Phone"
          value={billTo.phone}
          onChange={handleInputChange}
          name="phone"
        />
      </div>
      <FloatingLabelInput
        id="billToAddress"
        label="Address"
        value={billTo.address}
        onChange={handleInputChange}
        name="address"
        className="mt-4"
      />
    </div>
  );
};

export default BillToSection;
