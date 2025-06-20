
import React from 'react';
import FloatingLabelInput from './FloatingLabelInput';
import { Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { formatCurrency, getCurrencySymbol } from '../utils/formatCurrency.js';

const ItemDetails = ({ items, handleItemChange, addItem, removeItem, currencyCode: propCurrencyCode }) => {
  let currencyCode = propCurrencyCode;
  if (!currencyCode) {
    console.warn("Warning: currencyCode prop not provided to ItemDetails. Defaulting to 'BDT'.");
    currencyCode = 'BDT';
  }
  const currencySymbol = getCurrencySymbol(currencyCode);

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-slate-800">Item Details</h2>
      {items.map((item, index) => (
        <div key={index} className="mb-4 relative bg-gradient-to-r from-slate-50 to-emerald-50 p-4 rounded-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
            <FloatingLabelInput
              id={`itemName${index}`}
              label="Name"
              value={item.name}
              onChange={(e) => handleItemChange(index, 'name', e.target.value)}
            />
            <FloatingLabelInput
              id={`itemQuantity${index}`}
              label="Quantity"
              type="number"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, 'quantity', parseFloat(e.target.value))}
            />
            <FloatingLabelInput
              id={`itemAmount${index}`}
              label={`Amount (${currencySymbol})`}
              type="number"
              value={item.amount}
              onChange={(e) => handleItemChange(index, 'amount', parseFloat(e.target.value))}
            />
            <FloatingLabelInput
              id={`itemTotal${index}`}
              label={`Total (${currencySymbol})`}
              type="number"
              value={(item.quantity * item.amount).toFixed(2)}
              disabled
            />
          </div>
          <FloatingLabelInput
            id={`itemDescription${index}`}
            label="Description"
            value={item.description}
            onChange={(e) => handleItemChange(index, 'description', e.target.value)}
          />
          {index > 0 && (
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-200"
              onClick={() => removeItem(index)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      ))}
      <Button 
        type="button" 
        onClick={addItem} 
        className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        Add Item
      </Button>
    </div>
  );
};

export default ItemDetails;
