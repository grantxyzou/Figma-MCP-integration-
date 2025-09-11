/**
 * Auto-generated from Figma node 7:3571 - Fixed for self-contained component
 * Source URL: https://www.figma.com/design/qzikRfiDc1jxpKNX53qAKu/http---127.0.0.1-3845-mcp?node-id=7-3571
 */

// @ts-nocheck

function ChevronDown() {
  return (
    <div className="relative size-full" data-name="ChevronDown" data-node-id="7:1575">
      <div className="absolute bottom-[24.38%] left-[4.06%] right-[4.06%] top-1/4" data-name="Vector" data-node-id="7:1576">
        <svg className="block max-w-none size-full" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

function InfoGlyph() {
  return (
    <div className="relative size-full" data-name="Info glyph" data-node-id="7:1553">
      <svg className="block max-w-none size-full" viewBox="0 0 16 16" fill="currentColor">
        <circle cx="8" cy="8" r="8" fill="#015cda"/>
        <path d="M8 4a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 018 4zm0 8a1 1 0 100-2 1 1 0 000 2z" fill="white"/>
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg className="block max-w-none size-full" viewBox="0 0 10 10" fill="none">
      <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AsteriskIcon() {
  return (
    <svg className="block max-w-none size-full" viewBox="0 0 6 18" fill="none">
      <text x="3" y="14" textAnchor="middle" fill="#d13438" fontSize="14" fontFamily="Segoe UI">*</text>
    </svg>
  );
}

function InfoBubble() {
  return (
    <div className="relative size-full" data-name="Info Bubble" data-node-id="7:1555">
      <InfoGlyph />
    </div>
  );
}

interface ButtonProps {
  label?: string;
  icon?: React.ReactNode | null;
  showIcon?: boolean;
  type?: "Primary" | "Secondary" | "Danger";
  state?: "Rest" | "Hover" | "Disabled" | "Focus" | "Pressed";
}

function Button({ label = "Button", icon = null, showIcon = false, type = "Primary", state = "Disabled" }: ButtonProps) {
  if (type === "Secondary" && state === "Rest") {
    return (
      <div className="bg-white box-border content-stretch flex gap-2 items-center justify-start px-5 py-0 relative rounded-[2px] size-full" data-name="Type=Secondary, State=Rest" data-node-id="7:2542">
        <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
        <div className="flex flex-col font-['Segoe_UI:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] text-center text-nowrap" data-node-id="7:2544">
          <p className="leading-[18px] whitespace-pre">{label}</p>
        </div>
      </div>
    );
  }
}

interface InfoBoxProps {
  text?: string;
  showDismiss?: boolean;
  framework?: "React" | "Knockout";
  type?: "Info" | "Success" | "Warning" | "Error" | "Upsell" | "Blocked" | "Severe Warning";
}

function InfoBox({ text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobotristique, odio augue mplarat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Learn more", showDismiss = true, framework = "Knockout", type = "Info" }: InfoBoxProps) {
  if (framework === "React" && type === "Info") {
    return (
      <div className="content-stretch flex flex-col items-end justify-start relative size-full" data-name="Framework=React, Type=Info" data-node-id="7:2628">
        <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Content and Close Box Container" data-node-id="7:2629">
          <div className="basis-0 box-border content-stretch flex gap-2 grow items-start justify-start leading-[0] min-h-px min-w-px not-italic pl-3 pr-2 py-2 relative shrink-0" data-name="Content" data-node-id="7:2630">
            <div className="flex flex-col font-['Fabric_MDL2_Assets:Regular',_sans-serif] justify-center relative shrink-0 text-[#015cda] text-[16px] text-center text-nowrap" data-node-id="7:2631">
              <p className="leading-[16px] whitespace-pre"></p>
            </div>
            <div className="basis-0 font-['Segoe_UI:Regular',_sans-serif] grow min-h-px min-w-px relative shrink-0 text-[#292827] text-[12px]" data-node-id="7:2632">
              <p className="leading-[16px]">{text}</p>
            </div>
          </div>
          {showDismiss && (
            <div className="box-border content-stretch flex gap-2.5 items-center justify-center overflow-clip p-[8px] relative shrink-0 size-8" data-name="Icon Container" data-node-id="7:2633">
              <div className="overflow-clip relative shrink-0 size-2.5" data-name="Close" data-node-id="7:2634">
                <div className="absolute bottom-[1.25%] left-0 right-[1.25%] top-0" data-name="Vector" id="node-I7_2634-37_72">
                  <CloseIcon />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default function Option11() {
  return (
    <div className="bg-white relative shadow-[0px_25.6px_57.6px_0px_rgba(0,0,0,0.22),0px_4.8px_14.4px_0px_rgba(0,0,0,0.18)] size-full" data-name="Option 1.1" data-node-id="7:3571">
      <div className="absolute content-stretch flex flex-col gap-8 items-start justify-start left-5 top-[152px] w-[783px]" data-node-id="7:3575">
        <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3576">
          <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[0px] w-full" id="node-I7_3576-77421_20385">
            <p className="leading-[18px] text-[13px]">
              <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
              <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
            </p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-4 items-start justify-start relative shrink-0 w-full" data-node-id="7:3577">
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3578">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3578-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3579">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3579-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3579-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3579-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Subscription</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3579-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3579-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3579-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3579-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3579-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3579-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Select a subscription</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3579-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3580">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3580-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3580-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3580-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Select a storage account</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3580-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3580-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3580-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3580-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3580-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3580-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Select a storage account</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3580-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3581">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3581-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3582">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3582-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3582-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3582-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Resource group</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3582-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3582-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3582-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3582-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3582-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3582-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Select a resource group</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3582-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3583">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3583-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3584">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3584-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3585">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3585-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3585-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3585-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Storage account</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3585-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3585-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3585-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3585-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3585-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3585-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Select a storage account</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3585-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3586">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3586-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3587">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3587-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3588">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3588-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3588-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3588-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Location</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3588-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3588-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3588-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3588-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3588-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3588-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Select a location</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3588-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3589">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3589-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3590">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3590-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3591">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3591-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3591-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3591-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Task name</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3591-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3591-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3591-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3591-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3591-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3591-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Enter a task name</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3591-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3592">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3592-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3593">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3593-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3594">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3594-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3594-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3594-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Task name</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3594-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3594-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3594-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3594-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3594-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3594-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Enter a task name</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3594-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3595">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3595-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3596">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3596-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3597">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3597-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3597-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3597-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Storage account</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3597-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3597-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3597-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3597-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3597-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3597-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Select a storage account</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3597-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3598">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3598-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3599">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3599-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3600">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3600-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3600-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3600-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Resource group</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3600-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3600-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3600-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3600-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3600-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3600-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Select a resource group</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3600-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3601">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3601-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3602">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3602-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3603">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3603-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3603-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3603-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Task name</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3603-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3603-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3603-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3603-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3603-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3603-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Enter a task name</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3603-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3604">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3604-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3605">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3605-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3606">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3606-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3606-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3606-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Location</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3606-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3606-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3606-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3606-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3606-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3606-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Select a location</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3606-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3607">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3607-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3608">
            <div className="font-['Segoe_UI:Semibold',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[16px] w-full" id="node-I7_3608-77421_19847">
              <p className="leading-[22px]">Select scope</p>
            </div>
          </div>
          <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0 w-full" data-name="Elements / Input fields" data-node-id="7:3609">
            <div className="content-stretch flex items-start justify-start relative shrink-0 w-60" data-name="Label" id="node-I7_3609-77421_18310">
              <div className="basis-0 box-border content-stretch flex gap-1 grow h-6 items-start justify-start min-h-px min-w-px px-0 py-0.5 relative shrink-0" data-name="Label" id="node-I7_3609-77421_18312">
                <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#292827] text-[13px] text-nowrap" id="node-I7_3609-77421_18312-25743_356513">
                  <p className="leading-[18px] whitespace-pre">Task name</p>
                </div>
                <div className="h-[18px] relative shrink-0 w-1.5" data-name="Asterix" id="node-I7_3609-77421_18312-25743_356522">
                  <AsteriskIcon />
                </div>
              </div>
            </div>
            <div className="basis-0 content-stretch flex flex-col gap-1 grow items-start justify-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Control" id="node-I7_3609-77421_18313">
              <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Input" id="node-I7_3609-77421_18314">
                <div className="h-6 overflow-clip relative shrink-0 w-full" data-name="Frame" id="node-I7_3609-77421_18314-77421_20584">
                  <div className="absolute bg-white h-6 left-0 right-0 rounded-[2px] top-0" data-name="Base" id="node-I7_3609-77421_18314-3821_107">
                    <div aria-hidden="true" className="absolute border border-[#8a8886] border-solid inset-0 pointer-events-none rounded-[2px]" />
                  </div>
                  <div className="absolute font-['Segoe_UI:Regular',_sans-serif] h-[18px] leading-[0] left-2 not-italic overflow-ellipsis overflow-hidden right-6 text-[#605e5c] text-[13px] text-nowrap top-0.5" id="node-I7_3609-77421_18314-3821_108">
                    <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden">Enter a task name</p>
                  </div>
                  <div className="absolute overflow-clip right-1.5 size-3 top-1.5" data-name="ChevronDown" id="node-I7_3609-77421_18314-3821_109">
                    <ChevronDown />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-1 items-start justify-start relative shrink-0 w-full" data-name="Elements / Text containers" data-node-id="7:3610">
            <div className="font-['Segoe_UI:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#323130] text-[13px] w-full" id="node-I7_3610-77421_20385">
              <p className="leading-[18px]">
                <span className>{`Assign storage task to a storage account. To add or edit assignment, you must have contributor role access to the storage account. `}</span>
                <span className="font-['Segoe_UI:Regular',_sans-serif] not-italic text-[#0078d4]">Learn more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}