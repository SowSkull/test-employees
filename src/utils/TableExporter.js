import html2PDF from "html2pdf.js"

class TableExporter {
    constructor(table){
        this.table = table
    }

    exportCsv(){
        let content = [];
        const trs = this.table.querySelectorAll("tbody>tr")
        Array.prototype.map.call(trs, tr => {
            const tds = tr.children;
            content.push(Array.prototype.map.call(tds,td => td.innerHTML).join(";"))
        })
        content= encodeURI(content.join("\n"))
        const csvUrl = `data:text/csv;charset=utf-8,${content}`
        this.fileDownload(csvUrl,"employees.csv")
    };

    exportExcel(){
        const tableContent = this.table.outerHTML;
        const tableHtmlUrl = `data:application/vnd.ms-excel;charset-utf-8, ${tableContent}`
        this.fileDownload(tableHtmlUrl,"employees.xls")
    };

    exportPDF(){
        const tableContent = this.table;

        var opt = {
        margin:       0.5,
        filename:     'Employees.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'},
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        };

        // Old monolithic-style usage:
        html2PDF(tableContent, opt);
    };

    fileDownload(url, filename){
        const link = document.createElement("a")
        link.href = url;
        link.download = filename;
        link.click()
    }
};


export default TableExporter;