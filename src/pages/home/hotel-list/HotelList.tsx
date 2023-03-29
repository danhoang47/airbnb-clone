import { ContainerProps } from "_types/props";


function HotelList({ children }: ContainerProps) {
    return ( 
        <div className="hotel-list">
            {children}
        </div>
     );
}

export default HotelList;