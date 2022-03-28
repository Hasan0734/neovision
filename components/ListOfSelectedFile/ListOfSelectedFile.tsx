import CardTwo from '../CardTwo/CardTwo';
import SelectedFlies from '../SelectedFiles/SelectedFlies';
const ListOfSelectedFile = (props:any) => {
    const children:any = props.children
    return (
        <CardTwo>
            <div className="card__p">
                <div className="d-flex justify-content-between">
                    <h3>List of Selected Files</h3>
                </div>
            </div>
            <div >
             <SelectedFlies/>
            </div>
        </CardTwo>
    );
};

export default ListOfSelectedFile;