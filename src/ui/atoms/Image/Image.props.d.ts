import { StyledProps } from '../../../../../../../../../src/types/Image';

export interface Props extends StyledProps {
    src: string;
    alt: string;
    lazyLoad?: boolean;
    onImageClick: () => void;
}
