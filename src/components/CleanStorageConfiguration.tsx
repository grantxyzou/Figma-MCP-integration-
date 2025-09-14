import React from 'react';

// Image assets from MCP server
const imgInfoGlyph = "http://localhost:3845/assets/d9dd171fd8bb24d089416b0f44c01e7e99f92909.svg";
const imgOutline = "http://localhost:3845/assets/b618cc8277c605895ebc4a2db53d9b0bbe11e424.svg";
const imgShape = "http://localhost:3845/assets/ff1de316b1c82a84ac165660c29874ed9754b3ef.svg";
const imgShape1 = "http://localhost:3845/assets/a67950aecb6047ee3bf1ab2001a1c1abf5531f04.svg";
const imgOutterCircle = "http://localhost:3845/assets/8c8355256a68b4425415c3e82780102af136d344.svg";
const img = "http://localhost:3845/assets/4942bc118418411f7c02d3046a8c19a078daf3c3.svg";
const img1 = "http://localhost:3845/assets/252d618341abeb73f26be9b8d1c474210313cea2.svg";
const img2 = "http://localhost:3845/assets/ae2a0cd42cc8467412abc5dd6648b646e1e22116.svg";
const img3 = "http://localhost:3845/assets/9a10ec19358789df60cf91225c021b573be16933.svg";
const imgVector = "http://localhost:3845/assets/687df1afc6fad2f55bfa112d6fc8bb2fd7ec78d7.svg";
const imgVector1 = "http://localhost:3845/assets/88b9342702ac5f441898078584fc068e4c623713.svg";
const imgVector2 = "http://localhost:3845/assets/41b64bd9453cc73b0452815d4a02731a5b93fff4.svg";
const imgVector3 = "http://localhost:3845/assets/e2227d75538571bc65e9b352354672079bfbf871.svg";
const imgPin = "http://localhost:3845/assets/289c960ba6a49aa61d4dda060034e528322cd2ab.svg";
const imgVector4 = "http://localhost:3845/assets/538c2ab76d8553fc436b4735985dc6805e9d8867.svg";
const imgVector5 = "http://localhost:3845/assets/f9b444007f15156d9fac925220f6d4d55a5eff99.svg";
const img4 = "http://localhost:3845/assets/d7c01d05b79ea573857170109693e6587323812e.svg";
const img5 = "http://localhost:3845/assets/8dfd752870bbc664b7058aa260cc9989ee384a8b.svg";
const img6 = "http://localhost:3845/assets/8aa05bd571b57adeeb3e4a760f37163bdefdeb42.svg";
const img7 = "http://localhost:3845/assets/194c92e878fae03aaf502241559c07684e1886bf.svg";
const img8 = "http://localhost:3845/assets/b7c14fdd6176891b885b9165b93773ee65fa4f70.svg";
const img9 = "http://localhost:3845/assets/54372d6e448dc1886d2d790a396e6bea8758e134.svg";
const img10 = "http://localhost:3845/assets/dbae25a2f6dd4d250b6e0f5786572d515218f8db.svg";
const img11 = "http://localhost:3845/assets/f9bfcbca8ffb62d38c7bfa46e5e7ed6ab0494eeb.svg";
const img12 = "http://localhost:3845/assets/dd478fc0d5d69b208fea4b4c71d80a4952035ccb.svg";
const img13 = "http://localhost:3845/assets/75f0d2786109cae7af47a36aa2ff6fb0341680e6.svg";
const img14 = "http://localhost:3845/assets/905fd947cfd63c2f8db0c84933866a704bd9836e.svg";
const img15 = "http://localhost:3845/assets/91ad00a8953bb75c7f5896935526c517fdaab3f3.png";
const img16 = "http://localhost:3845/assets/de158c2ca7c1e4f015ebf95428df9e9b611496d6.svg";
const img17 = "http://localhost:3845/assets/5b720c7a9a6d7c4aa81194ad4efa19e1bf280958.svg";
const img18 = "http://localhost:3845/assets/1ff0f9ce926a5ea54489f41c38eaee16fdbefa19.svg";
const img19 = "http://localhost:3845/assets/062d142d2d7fe0a674f80930650d2b2ef2324ba9.svg";

// Helper Components
function InfoGlyph() {
  return (
    <div className="relative size-full" data-name="Info glyph" data-node-id="7:1553">
      <img alt="" className="block max-w-none size-full" src={imgInfoGlyph} />
    </div>
  );
}

function InfoBubble() {
  return (
    <div className="relative size-full" data-name="Info Bubble" data-node-id="7:1555">
      <InfoGlyph />
    </div>
  );
}

interface RadioButtonProps {
  label?: string;
  selected?: boolean;
  disabled?: boolean;
}

function RadioButton({ label = "Label", selected = false, disabled = false }: RadioButtonProps) {
  let iconSrc = imgOutterCircle; // Default unselected
  let textColor = "#323130"; // Default text color
  
  if (disabled) {
    textColor = "#a19f9d";
    iconSrc = selected ? imgShape : imgOutline;
  } else if (selected) {
    iconSrc = imgShape1;
  }

  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0">
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
    <div className="content-stretch flex gap-2 items-start justify-start relative w-[480px]">
      <div className="relative shrink-0 size-4">
        <div className="absolute inset-0">
          <img alt="" className="block max-w-none size-full" src={img} />
        </div>
        <div className="absolute inset-[12.5%_41.26%_69.39%_40.63%]">
          <img alt="" className="block max-w-none size-full" src={img1} />
        </div>
        <div className="absolute inset-[39.5%_43.44%_16.75%_42.81%]">
          <img alt="" className="block max-w-none size-full" src={img2} />
        </div>
      </div>
      <div className="basis-0 font-['Segoe_UI:Regular',_sans-serif] grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#292827] text-[12px]">
        <p className="leading-[16px]">{message}</p>
      </div>
    </div>
  );
}

function DropDown({ label, placeholder }: { label?: string; placeholder?: string }) {
  return (
    <div className="bg-white box-border content-stretch flex gap-1 items-center justify-start pl-2 pr-1.5 py-[3px] relative rounded-[2px] border border-[#8a8886]">
      <div className="basis-0 font-['Segoe_UI:Regular',_sans-serif] grow h-[18px] leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#605e5c] text-[13px] text-nowrap">
        <p className="leading-[18px] overflow-ellipsis overflow-hidden">{placeholder || label}</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-3">
        <div className="absolute bottom-[24.38%] left-[4.06%] right-[4.06%] top-1/4">
          <img alt="" className="block max-w-none size-full" src={img3} />
        </div>
      </div>
    </div>
  );
}

// Header Components
function SiteHeader() {
  return (
    <div className="bg-[#0078d4] content-stretch flex h-10 items-center justify-between relative w-full">
      {/* Left menu group */}
      <div className="content-stretch flex items-center justify-start max-w-[189px] relative shrink-0 w-[189px]">
        <div className="bg-[#0078d4] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-10">
          <div className="relative shrink-0 size-4">
            <div className="absolute h-[9px] left-1/2 translate-x-[-50%] translate-y-[-50%] w-4" style={{ top: "calc(50% + 0.5px)" }}>
              <img alt="" className="block max-w-none size-full" src={img4} />
            </div>
          </div>
        </div>
        <div className="basis-0 bg-[#0078d4] box-border content-stretch flex grow h-10 items-center justify-center min-h-px min-w-px px-5 py-0 relative shrink-0">
          <div className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-nowrap text-white">
            <p className="leading-[40px] whitespace-pre">Microsoft Azure</p>
          </div>
        </div>
      </div>

      {/* Search Box */}
      <button className="basis-0 bg-[#0078d4] box-border content-stretch cursor-pointer flex grow h-10 items-center justify-center min-h-px min-w-[302px] overflow-clip pl-2 pr-0 py-0 relative shrink-0">
        <div className="basis-0 bg-[#b3d7f2] box-border content-stretch flex gap-2.5 grow h-[26px] items-center justify-start max-w-[520px] min-h-px min-w-[280px] pl-2 pr-0 py-0 relative rounded-[2px] shrink-0">
          <div className="overflow-clip relative shrink-0 size-3.5">
            <div className="absolute bottom-[0.25%] left-0 right-0 top-0">
              <img alt="" className="block max-w-none size-full" src={img5} />
            </div>
          </div>
          <div className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#135995] text-[13px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">Search resources, services, and docs (G+/)</p>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2 h-10 items-center justify-center px-2 py-[7px] relative shrink-0 w-[90px]">
          <div className="bg-white box-border content-stretch flex gap-[5px] h-[26px] items-center justify-center px-2 py-[3px] relative rounded-[3px] shrink-0 w-[77px]">
            <div className="relative shrink-0 size-4">
              <div className="absolute h-[6.133px] translate-x-[-50%] translate-y-[-50%] w-[7.094px]" style={{ top: "calc(50% - 3.934px)", left: "calc(50% + 2.571px)" }}>
                <img alt="" className="block max-w-none size-full" src={img6} />
              </div>
              <div className="absolute h-[5.865px] translate-x-[-50%] translate-y-[-50%] w-[6.813px]" style={{ top: "calc(50% + 4.067px)", left: "calc(50% - 2.523px)" }}>
                <img alt="" className="block max-w-none size-full" src={img7} />
              </div>
              <div className="absolute h-[10.504px] translate-x-[-50%] translate-y-[-50%] w-[10px]" style={{ top: "calc(50% - 1.748px)", left: "calc(50% - 3px)" }}>
                <img alt="" className="block max-w-none size-full" src={img8} />
              </div>
              <div className="absolute h-[10.502px] translate-x-[-50%] translate-y-[-50%] w-[10px]" style={{ top: "calc(50% + 1.749px)", left: "calc(50% + 3px)" }}>
                <img alt="" className="block max-w-none size-full" src={img9} />
              </div>
            </div>
            <div className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2a446f] text-[12px] text-center text-nowrap">
              <p className="leading-[36px] whitespace-pre">Copilot</p>
            </div>
          </div>
        </div>
      </button>

      {/* Right menu group */}
      <div className="content-stretch flex items-center justify-end relative shrink-0">
        <div className="bg-[#0078d4] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-10">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute bottom-[6.25%] left-0 right-0 top-[6.25%]">
              <img alt="" className="block max-w-none size-full" src={img10} />
            </div>
          </div>
        </div>
        <div className="bg-[#0078d4] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-10">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute h-4 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[13.76px]" style={{ left: "calc(50% - 0.5px)" }}>
              <img alt="" className="block max-w-none size-full" src={img11} />
            </div>
          </div>
        </div>
        <div className="bg-[#0078d4] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-10">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute bottom-[0.63%] left-0 right-[0.63%] top-0">
              <img alt="" className="block max-w-none size-full" src={img12} />
            </div>
          </div>
        </div>
        <div className="bg-[#0078d4] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-10">
          <div className="overflow-clip relative shrink-0 size-4">
            <div className="absolute left-1/2 size-[14.939px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <img alt="" className="block max-w-none size-full" src={img13} />
            </div>
          </div>
        </div>
        <div className="bg-[#0078d4] box-border content-stretch flex gap-2 items-center justify-center p-[8px] relative shrink-0 size-10">
          <div className="relative shrink-0 size-4">
            <img alt="" className="block max-w-none size-full" src={img14} />
          </div>
        </div>
        <div className="bg-[#0078d4] box-border content-stretch flex gap-1.5 h-10 items-center justify-end pl-5 pr-1.5 py-0 relative shrink-0">
          <div className="content-stretch flex flex-col font-['Segoe_UI:Semibold',_sans-serif] items-end justify-start leading-[0] not-italic relative shrink-0 text-nowrap text-right text-white">
            <div className="relative shrink-0 text-[14px]">
              <p className="leading-[20px] text-nowrap whitespace-pre">Connie Wilson</p>
            </div>
            <div className="opacity-90 relative shrink-0 text-[10px] uppercase">
              <p className="leading-[normal] text-nowrap whitespace-pre">CONTOSO</p>
            </div>
          </div>
          <div className="relative shrink-0 size-7">
            <div className="absolute bg-center bg-cover bg-no-repeat inset-0" style={{ backgroundImage: `url('${img15}')` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function BreadcrumbBar() {
  return (
    <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start overflow-clip pb-0 pt-2 px-5">
      <div className="box-border content-stretch flex gap-2 h-5 items-center justify-start overflow-clip px-0 py-1.5 relative shrink-0">
        <div className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">Breadcrumb</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[9px]">
          <div className="absolute flex inset-[4.38%_22.5%_3.75%_26.87%] items-center justify-center">
            <div className="flex-none h-[8.1px] rotate-[270deg] w-[14.7px]">
              <div className="relative size-full">
                <img alt="" className="block max-w-none size-full" src={imgVector5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-2 h-5 items-center justify-start overflow-clip px-0 py-1.5 relative shrink-0">
        <div className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0078d4] text-[14px] text-nowrap">
          <p className="leading-[20px] whitespace-pre">Breadcrumb</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[9px]">
          <div className="absolute flex inset-[4.38%_22.5%_3.75%_26.87%] items-center justify-center">
            <div className="flex-none h-[8.1px] rotate-[270deg] w-[14.7px]">
              <div className="relative size-full">
                <img alt="" className="block max-w-none size-full" src={imgVector5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BladeHeader() {
  return (
    <div className="bg-white h-16 relative w-full">
      <div className="absolute flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] left-[58px] not-italic text-[#605e5c] text-[12px] text-nowrap top-12 translate-y-[-50%]">
        <p className="leading-[16px] whitespace-pre">Storage account</p>
      </div>
      <div className="absolute left-5 overflow-clip size-7 top-4">
        <div className="absolute contents inset-[8.71%_2.78%_8.72%_2.78%]">
          <div className="absolute inset-[8.71%_2.78%_8.72%_2.78%]">
            <img alt="" className="block max-w-none size-full" src={img16} />
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-4 items-center justify-start left-[58px] overflow-clip top-2">
        <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[24px] text-nowrap">
          <p className="leading-[32px] whitespace-pre">storageaccountName</p>
        </div>
        <div className="h-6 relative shrink-0 w-[2.273px]">
          <img alt="" className="block max-w-none size-full" src={img17} />
        </div>
        <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[24px] text-nowrap">
          <p className="leading-[32px] whitespace-pre">Configuration</p>
        </div>
        <div className="content-stretch flex items-start justify-start relative shrink-0">
          <div className="relative shrink-0 size-8">
            <div className="absolute left-1/2 overflow-clip size-4 top-2 translate-x-[-50%]">
              <img alt="" className="block max-w-none size-full" src={imgPin} />
            </div>
          </div>
          <div className="relative shrink-0 size-8">
            <div className="absolute left-1/2 size-4 top-2 translate-x-[-50%]">
              <div className="absolute inset-[43.75%_6.25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute overflow-clip right-[22px] size-3.5 top-5">
        <div className="absolute bottom-[1.25%] left-0 right-[1.25%] top-0">
          <img alt="" className="block max-w-none size-full" src={img18} />
        </div>
      </div>
    </div>
  );
}

function ToolbarBar() {
  return (
    <div className="bg-white h-9 overflow-clip shadow-[0px_-1px_0px_0px_inset_rgba(204,204,204,0.8)] w-full">
      <div className="absolute content-stretch flex items-center justify-start left-0 top-0">
        <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-2 py-2.5 relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-4">
            <img alt="" className="block max-w-none size-full" src={imgVector} />
          </div>
          <div className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323130] text-[12px] text-nowrap">
            <p className="leading-[16px] whitespace-pre">Save</p>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-2 py-2.5 relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-4">
            <img alt="" className="block max-w-none size-full" src={imgVector1} />
          </div>
          <div className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323130] text-[12px] text-nowrap">
            <p className="leading-[16px] whitespace-pre">Disable</p>
          </div>
          <div className="overflow-clip relative shrink-0 size-3">
            <div className="absolute bottom-[24.38%] left-[4.06%] right-[4.06%] top-1/4">
              <img alt="" className="block max-w-none size-full" src={imgVector2} />
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-2 py-2.5 relative shrink-0">
          <div className="overflow-clip relative shrink-0 size-4">
            <img alt="" className="block max-w-none size-full" src={imgVector3} />
          </div>
          <div className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323130] text-[12px] text-nowrap">
            <p className="leading-[16px] whitespace-pre">Refresh</p>
          </div>
        </div>
        <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start overflow-clip px-2 py-2.5 relative shrink-0">
          <div className="relative shrink-0 size-4">
            <img alt="" className="block max-w-none size-full" src={img19} />
          </div>
          <div className="flex flex-col font-['Segoe_UI:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323130] text-[12px] text-nowrap">
            <p className="leading-[16px] whitespace-pre">Give feedback</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Form Field Components
function FormField({ 
  label, 
  children, 
  hasInfoBubble = false 
}: { 
  label: string; 
  children: React.ReactNode; 
  hasInfoBubble?: boolean; 
}) {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative w-[728px]">
      <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
        <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] text-nowrap">
              <p className="leading-[18px] whitespace-pre">{label}</p>
            </div>
            {hasInfoBubble && (
              <div className="h-[18px] relative shrink-0 w-3">
                <div className="absolute bottom-[3px] right-0 size-3">
                  <InfoBubble />
                </div>
              </div>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default function CleanStorageConfiguration() {
  return (
    <div className="bg-white relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[1366px] h-[1351px]" data-name="Storage / Configuration" data-node-id="33:10637">
      {/* Shell Header */}
      <div className="absolute contents left-0 top-0 w-[1366px] h-[132px]">
        <SiteHeader />
        <div className="absolute top-10 left-0 w-[148px] h-[28px]">
          <BreadcrumbBar />
        </div>
        <div className="absolute top-[68px] left-0 w-[1366px] h-[64px]">
          <BladeHeader />
        </div>
      </div>

      {/* Toolbar */}
      <div className="absolute left-[25px] top-[162px] w-[1059px] h-9">
        <ToolbarBar />
      </div>

      {/* Page Description */}
      <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[30px] leading-[18px] left-[45px] not-italic text-[#323130] text-[13px] top-[219px] w-[728px]">
        <p className="mb-0">
          <span>The cost of your storage account depends on the usage and the options you choose below.</span>
          <span className="text-[#0078d4]"> </span>
          <a className="cursor-pointer font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]" href="https://ms.portal.azure.com/verifyLink?href=https%3A%2F%2Fgo.microsoft.com%2Ffwlink%2F%3FLinkId%3D331014&id=Microsoft_Azure_Storage">
            <span className="leading-[18px] text-[13px]">Learn more about storage pricing</span>
          </a>
        </p>
      </div>

      {/* Form Content */}
      <div className="absolute left-[45px] top-[261px] w-[728px] space-y-6">
        {/* Account kind - Read only */}
        <div className="h-[42px] w-[728px]">
          <div className="content-stretch flex flex-col gap-1 items-start justify-start w-[728px]">
            <div className="content-stretch flex flex-col gap-2.5 items-start justify-start relative shrink-0 w-full">
              <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[14px] w-full">
                <p className="leading-[20px]">Account kind</p>
              </div>
            </div>
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full">
              <p className="leading-[18px]">StorageV2 (general purpose v2)</p>
            </div>
          </div>
        </div>

        {/* Performance */}
        <FormField label="Performance" hasInfoBubble={true}>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Standard" disabled={true} />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Premium" selected={true} disabled={true} />
            </div>
          </div>
          <InlineMessage message="This setting cannot be changed after the storage account is created." />
        </FormField>

        {/* Secure transfer required */}
        <FormField label="Secure transfer required" hasInfoBubble={true}>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Disable" />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Enable" selected={true} />
            </div>
          </div>
        </FormField>

        {/* Encryption in transit for SMB */}
        <div className="content-stretch flex flex-col gap-2 items-start justify-start w-[214px]">
          <div className="box-border content-stretch flex gap-1 items-start justify-start px-0 py-[3px] relative shrink-0 w-full">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap">
              <p className="leading-[18px] whitespace-pre">Encryption in transit for SMB</p>
            </div>
            <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-0 py-[3px] relative shrink-0">
              <div className="relative shrink-0 size-3">
                <InfoBubble />
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Disable" />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Enable" selected={true} />
            </div>
          </div>
        </div>

        {/* Encryption in transit for NFS */}
        <div className="content-stretch flex flex-col gap-2 items-start justify-start w-[214px]">
          <div className="box-border content-stretch flex gap-1 items-start justify-start px-0 py-[3px] relative shrink-0 w-full">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap">
              <p className="leading-[18px] whitespace-pre">Encryption in transit for NFS</p>
            </div>
            <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-0 py-[3px] relative shrink-0">
              <div className="relative shrink-0 size-3">
                <InfoBubble />
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Disable" />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Enable" selected={true} />
            </div>
          </div>
        </div>

        {/* Allow Blob anonymous access */}
        <FormField label="Allow Blob anonymous access" hasInfoBubble={true}>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Disable" selected={true} />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Enable" />
            </div>
          </div>
        </FormField>

        {/* Allow storage account key access */}
        <FormField label="Allow storage account key access" hasInfoBubble={true}>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Disable" selected={true} />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Enable" />
            </div>
          </div>
        </FormField>

        {/* Allow upper limit for shared access signature (SAS) expiry interval */}
        <FormField label="Allow upper limit for shared access signature (SAS) expiry interval" hasInfoBubble={true}>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Disable" selected={true} />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Enable" />
            </div>
          </div>
        </FormField>

        {/* Default to Microsoft Entra authorization in the Azure portal */}
        <FormField label="Default to Microsoft Entra authorization in the Azure portal" hasInfoBubble={true}>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Disable" selected={true} />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Enable" />
            </div>
          </div>
        </FormField>

        {/* Minimum TLS version */}
        <FormField label="Minimum TLS version" hasInfoBubble={true}>
          <div className="relative shrink-0 w-[466px]">
            <DropDown placeholder="Version 1.2" />
          </div>
        </FormField>

        {/* Permitted scope for copy operations (preview) */}
        <FormField label="Permitted scope for copy operations (preview)" hasInfoBubble={true}>
          <div className="relative shrink-0 w-[468px]">
            <DropDown placeholder="From any storage account" />
          </div>
        </FormField>

        {/* Default to Microsoft Entra authorization in the Azure portal (second instance with different options) */}
        <FormField label="Default to Microsoft Entra authorization in the Azure portal" hasInfoBubble={true}>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Hot" selected={true} />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Cool" />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Cold" />
            </div>
          </div>
        </FormField>

        {/* Large file shares */}
        <FormField label="Large file shares" hasInfoBubble={true}>
          <div className="box-border content-stretch flex gap-5 h-5 items-start justify-start px-0 py-0.5 relative shrink-0 w-[728px]">
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[77px]">
              <RadioButton label="Disable" selected={true} />
            </div>
            <div className="content-stretch flex flex-col gap-0.5 items-start justify-start relative shrink-0 w-[86px]">
              <RadioButton label="Enable" />
            </div>
          </div>
        </FormField>
      </div>
    </div>
  );
}
