import { ReactElement } from 'react';
import GeneralLayout from './../components/layouts/GeneralLayout'

function Covid() {
    return (
        <div>
            <GeneralLayout />
        </div>
    )
}

Covid.getLayout = function getLayout(page) {
    return <GeneralLayout>{page}</GeneralLayout>;
  };

export default Covid;
