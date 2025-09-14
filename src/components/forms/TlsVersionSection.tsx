import React from 'react';

// Image assets from MCP server
const imgInfoGlyph = "http://localhost:3845/assets/d9dd171fd8bb24d089416b0f44c01e7e99f92909.svg";
const imgChevronDown = "http://localhost:3845/assets/9a10ec19358789df60cf91225c021b573be16933.svg";

interface TlsVersionSectionProps {
  selectedVersion?: string;
  options?: string[];
  onChange?: (version: string) => void;
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

function DropDown({ 
  value, 
  options = [], 
  onChange 
}: { 
  value: string; 
  options: string[]; 
  onChange?: (value: string) => void; 
}) {
  return (
    <div className="relative">
      <div className="bg-white box-border content-stretch flex gap-1 items-center justify-start pl-2 pr-1.5 py-[3px] relative rounded-[2px] w-[466px] h-6">
        <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <div className="basis-0 font-['Segoe_UI:Regular',_sans-serif] grow h-[18px] leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#605e5c] text-[13px] text-nowrap">
          <p className="leading-[18px] overflow-ellipsis overflow-hidden">{value}</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-3">
          <div className="absolute bottom-[24.38%] left-[4.06%] right-[4.06%] top-1/4">
            <img alt="" className="block max-w-none size-full" src={imgChevronDown} />
          </div>
        </div>
      </div>
      {/* In a real implementation, you'd add dropdown functionality here */}
    </div>
  );
}

export default function TlsVersionSection({ 
  selectedVersion = 'Version 1.2', 
  options = ['Version 1.0', 'Version 1.1', 'Version 1.2'],
  onChange,
  className = '' 
}: TlsVersionSectionProps) {
  return (
    <div 
      className={`content-stretch flex flex-col gap-3 items-start justify-start relative w-full ${className}`}
      data-name="Minimum TLS version"
    >
      <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
          {/* Label with Info Bubble */}
          <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0">
              <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] text-nowrap">
                <p className="leading-[18px] whitespace-pre">Minimum TLS version</p>
              </div>
              <div className="h-[18px] relative shrink-0 w-3">
                <div className="absolute bottom-[3px] right-0 size-3">
                  <InfoBubble />
                </div>
              </div>
            </div>
          </div>
          
          {/* Dropdown */}
          <DropDown 
            value={selectedVersion}
            options={options}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
