import { useState, useRef, useEffect } from "react";

// CSS styles for the sliding effect
const styles = {
  transition: "max-height 0.1s ease-out, opacity 0.1s ease-out",
  overflow: "hidden",
  opacity: 0,
  maxHeight: 0,
};

type AccordionItemProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ number, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        contentRef.current.style.opacity = "1";
      }
    } else {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = "0px";
        contentRef.current.style.opacity = "0";
      }
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[#E9E9E9] p-10">
      <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer items-center">
        <span className={`mr-7 text-2xl ${isOpen ? "text-[#ED5E3B]" : "text-[#B9B9B9]"}`}>{number}</span>
        <div className="text-[27px] lg:text-[41px]">{title}</div>
      </div>
      <div
        ref={contentRef}
        style={styles}
        className={`mt-4 max-w-[450px] font-jakarta text-base leading-relaxed text-[#575757] transition-all duration-300 ease-out md:text-2xl ${isOpen ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

const AccordionFAQ = () => {
  return (
    <div className="h-[771px] w-full overflow-y-scroll">
      <ol className="font-duplicate-sans">
        <AccordionItem number="01" title="Gym plans">
          Discounted gym memberships plan across our partners in Africa.
        </AccordionItem>
        <AccordionItem number="02" title="Meals Plan">
          Details about our meals plan will be here.
        </AccordionItem>
        <AccordionItem number="03" title="Ai Integration">
          Details about our AI integration will be here.
        </AccordionItem>
        <AccordionItem number="04" title="Tokenize Rewards">
          Details about our tokenize rewards will be here.
        </AccordionItem>
        <AccordionItem number="04" title="Market Place">
          Details about our market place will be here.
        </AccordionItem>
        <AccordionItem number="04" title="Community">
          Details about our community will be here.
        </AccordionItem>
      </ol>
    </div>
  );
};

export default AccordionFAQ;
