import { render, screen } from '@testing-library/react';
import { OfferGoods } from './offer-goods';

describe('Component: OfferGoods', () => {
  const offerGoodsTestid = 'offer-inside';
  const expectedProps = {
    goods: ['check', 'check'],
  };

  it('should render correct', () => {
    const expectedText = /Whats inside/i;

    render(<OfferGoods {...expectedProps} />);

    const offerGoods = screen.getByTestId(offerGoodsTestid);

    expect(offerGoods).toBeInTheDocument();
    expect(offerGoods).toHaveTextContent(expectedText);
  });

  it('should contain correct "goods" count', () => {
    const goodTestId = 'offer-inside-good';

    render(<OfferGoods {...expectedProps} />);

    const goods = screen.getAllByTestId(goodTestId);

    expect(goods.length).toBe(expectedProps.goods.length);
  });
});
