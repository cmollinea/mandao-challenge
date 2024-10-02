import { Card, Placeholder } from 'react-bootstrap';

export const CardSkeleton = () => {
  return (
    <Card className='p-2' style={{ width: '100%', maxWidth: '400px' }}>
      <Placeholder
        style={{ height: '20rem', background: '#d1d5db', borderRadius: '8px' }}
        as={Card.Header}
        animation='wave'
      />

      <Card.Body>
        <Placeholder as={Card.Title} animation='wave'>
          <Placeholder
            style={{ background: '#d1d5db', borderRadius: '8px' }}
            xs={6}
          />
        </Placeholder>
        <Placeholder as={Card.Text} animation='wave'>
          <Placeholder
            style={{ background: '#d1d5db', borderRadius: '8px' }}
            xs={12}
          />
          <Placeholder
            style={{ background: '#d1d5db', borderRadius: '8px' }}
            xs={12}
          />
        </Placeholder>
        <Placeholder.Button
          style={{ height: '3rem' }}
          xs={12}
          animation='wave'
        />
      </Card.Body>
    </Card>
  );
};
