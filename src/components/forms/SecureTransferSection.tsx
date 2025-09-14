import React from 'react';

// Image assets from MCP server
const imgInfoGlyph = "http://localhost:3845/assets/d9dd171fd8bb24d089416b0f44c01e7e99f92909.svg";
const imgShape = "http://localhost:3845/assets/a67950aecb6047ee3bf1ab2001a1c1abf5531f04.svg";
const imgOutterCircle = "http://localhost:3845/assets/8c8355256a68b4425415c3e82780102af136d344.svg";

interface SecureTransferSectionProps {
  selectedOption?: 'disable' | 'enable';
  onChange?: (option: 'disable' | 'enable') => void;
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
  onClick 
}: { 
  label: string; 
  selected: boolean; 
  onClick?: () => void; 
}) {
  const iconSrc = selected ? imgShape : imgOutterCircle;

  return (
    <div 
      className={`content-stretch flex gap-2 items-center justify-start relative shrink-0 ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[18px]">
        <img alt="" className="block max-w-none size-full" src={iconSrc} />
      </div>
      <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">{label}</p>
      </div>
    </div>
  );
}

export default function SecureTransferSection({ 
  selectedOption = 'enable', 
  onChange,
  className = '' 
}: SecureTransferSectionProps) {
  const handleOptionChange = (option: 'disable' | 'enable') => {
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div 
      className={`content-stretch flex flex-col gap-3 items-start justify-start relative w-full ${className}`}
      data-name="Secure transfer required"
    >
      <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
        {/* Label with Info Bubble */}
        <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] text-nowrap">
              <p className="leading-[18px] whitespace-pre">Secure transfer required</p>
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
              label="Disable" 
              selected={selectedOption === 'disable'}
              onClick={() => handleOptionChange('disable')}
            />
          </div>
          <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
            <RadioButton 
              label="Enable" 
              selected={selectedOption === 'enable'}
              onClick={() => handleOptionChange('enable')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
