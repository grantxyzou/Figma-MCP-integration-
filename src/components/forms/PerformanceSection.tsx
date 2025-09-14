import React from 'react';

// Image assets from MCP server
const imgInfoGlyph = "http://localhost:3845/assets/d9dd171fd8bb24d089416b0f44c01e7e99f92909.svg";
const imgOutline = "http://localhost:3845/assets/b618cc8277c605895ebc4a2db53d9b0bbe11e424.svg";
const imgShape = "http://localhost:3845/assets/ff1de316b1c82a84ac165660c29874ed9754b3ef.svg";
const imgInfo = "http://localhost:3845/assets/4942bc118418411f7c02d3046a8c19a078daf3c3.svg";
const imgInfoIcon1 = "http://localhost:3845/assets/252d618341abeb73f26be9b8d1c474210313cea2.svg";
const imgInfoIcon2 = "http://localhost:3845/assets/ae2a0cd42cc8467412abc5dd6648b646e1e22116.svg";

interface PerformanceSectionProps {
  selectedOption?: 'standard' | 'premium';
  disabled?: boolean;
  onChange?: (option: 'standard' | 'premium') => void;
  className?: string;
}

function InfoGlyph() {
  return (
    <div className="relative size-full" data-name="Info glyph">
      <img alt="" className="block max-w-none size-full" src={imgInfoGlyph} />
    </div>
  );
}

function InfoBubble() {
  return (
    <div className="relative size-full" data-name="Info Bubble">
      <InfoGlyph />
    </div>
  );
}

function RadioButton({ 
  label, 
  selected, 
  disabled, 
  onClick 
}: { 
  label: string; 
  selected: boolean; 
  disabled?: boolean; 
  onClick?: () => void; 
}) {
  const iconSrc = selected ? imgShape : imgOutline;
  const textColor = disabled ? "#a19f9d" : "#323130";

  return (
    <div 
      className={`content-stretch flex gap-2 items-center justify-start relative shrink-0 ${!disabled && onClick ? 'cursor-pointer' : ''}`}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="relative shrink-0 size-[18px]">
        <img alt="" className="block max-w-none size-full" src={iconSrc} />
      </div>
      <div 
        className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[13px] text-nowrap"
        style={{ color: textColor }}
      >
        <p className="leading-[18px] whitespace-pre">{label}</p>
      </div>
    </div>
  );
}

function InlineMessage({ message }: { message: string }) {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-[480px]">
      <div className="relative shrink-0 size-4">
        <div className="absolute inset-0">
          <img alt="" className="block max-w-none size-full" src={imgInfo} />
        </div>
        <div className="absolute inset-[12.5%_41.26%_69.39%_40.63%]">
          <img alt="" className="block max-w-none size-full" src={imgInfoIcon1} />
        </div>
        <div className="absolute inset-[39.5%_43.44%_16.75%_42.81%]">
          <img alt="" className="block max-w-none size-full" src={imgInfoIcon2} />
        </div>
      </div>
      <div className="basis-0 font-['Segoe_UI:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292827] text-[12px]">
        <p className="leading-[16px]">{message}</p>
      </div>
    </div>
  );
}

export default function PerformanceSection({ 
  selectedOption = 'premium', 
  disabled = true, 
  onChange,
  className = '' 
}: PerformanceSectionProps) {
  const handleOptionChange = (option: 'standard' | 'premium') => {
    if (!disabled && onChange) {
      onChange(option);
    }
  };

  return (
    <div 
      className={`box-border content-stretch flex flex-col gap-3 items-start justify-start pb-5 pt-0 px-0 relative w-full ${className}`}
      data-name="Performance"
    >
      {/* Form Field */}
      <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
          {/* Label with Info Bubble */}
          <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0">
              <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] text-nowrap">
                <p className="leading-[18px] whitespace-pre">Performance</p>
              </div>
              <div className="h-[18px] relative shrink-0 w-3">
                <div className="absolute bottom-[3px] right-0 size-3">
                  <InfoBubble />
                </div>
              </div>
            </div>
          </div>
          
          {/* Radio Button Options */}
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton 
                label="Standard" 
                selected={selectedOption === 'standard'}
                disabled={disabled}
                onClick={() => handleOptionChange('standard')}
              />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton 
                label="Premium" 
                selected={selectedOption === 'premium'}
                disabled={disabled}
                onClick={() => handleOptionChange('premium')}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Inline Message */}
      <InlineMessage message="This setting cannot be changed after the storage account is created." />
    </div>
  );
}
