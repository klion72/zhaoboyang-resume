import { Download } from 'lucide-react';

const PrintButton: React.FC = () => {
  return (
    <div className="flex justify-end mb-4 no-print">
      <a
        href="/赵博洋-简历.pdf"
        download="赵博洋-简历.pdf"
        className="flex items-center gap-2 bg-anthropic-dark text-anthropic-light px-5 py-2.5 rounded-full text-sm font-headings font-medium hover:bg-primary transition-all shadow-md hover:shadow-lg active:scale-95"
      >
        <Download size={16} /> 下载 PDF
      </a>
    </div>
  );
};

export default PrintButton;
