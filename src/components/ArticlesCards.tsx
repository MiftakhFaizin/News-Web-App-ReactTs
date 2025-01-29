import React from 'react';
import { NewsModel } from "../models/NewsModel";

interface ArticlesCardsProps {
    newsDatas: NewsModel[];
}

const ArticlesCards: React.FC<ArticlesCardsProps> = ({ newsDatas }) => {
    return (
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-5 gap-y-10 mt-10">
            {newsDatas.map((news, index) => {
                {if (news.abstract || news.lead_paragraph) {
                    return (
                        <a href={news.web_url} target='_blank'>
                            <div key={index} className="flex flex-col h-52 border border-gray-400 rounded-sm px-5 py-5">
                                <h2 className="font-bold line-clamp-2">{news.abstract}</h2>
                                <p className="text-gray-500 line-clamp-3">{news.lead_paragraph}</p>
                            </div>
                        </a>
                    )
                }}
            })}
        </div>
    );
};

export default ArticlesCards;