import React, {lazy, Suspense} from 'react';

const LazyArticles = ({children}) => {
    return(
        <Suspense>
            {children}
        </Suspense>
    )
}

export default LazyArticles;