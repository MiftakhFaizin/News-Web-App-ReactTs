export interface NewsModel {
    abstract:         string;
    web_url:          string;
    snippet:          string;
    lead_paragraph:   string;
    source:           string;
    multimedia:       any[];
    headline:         string;
    keywords:         any[];
    pub_date:         string;
    document_type:    DocumentType;
    news_desk:        string;
    section_name:     string;
    byline:           string;
    type_of_material: string;
    _id:              string;
    word_count:       number;
    uri:              string;
    print_section?:   string;
    print_page?:      string;
    subsection_name?: string;
}