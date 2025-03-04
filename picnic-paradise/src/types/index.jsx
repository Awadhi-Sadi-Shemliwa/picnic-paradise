// Event interface
export class Event {
    constructor(
      id,
      title,
      category,
      description,
      shortDescription,
      date,
      time,
      location,
      price,
      capacity,
      availableSpots,
      host,
      images,
      amenities,
      tags,
      rating,
      reviews,
      featured
    ) {
      this.id = id;
      this.title = title;
      this.category = category;
      this.description = description;
      this.shortDescription = shortDescription;
      this.date = date;
      this.time = time;
      this.location = location; // { name, address, city, coordinates }
      this.price = price;
      this.capacity = capacity;
      this.availableSpots = availableSpots;
      this.host = host; // { id, name, rating, verified, image }
      this.images = images; // { thumbnail, gallery, featured }
      this.amenities = amenities;
      this.tags = tags;
      this.rating = rating;
      this.reviews = reviews; // Array of Review objects
      this.featured = featured; // Optional
    }
  }
  
  // EventCategory type
  export const EventCategory = {
    SIP_AND_PAINT: 'sip-and-paint',
    LUXURY_PICNICS: 'luxury-picnics',
    MATCH_SCREENINGS: 'match-screenings',
    WINE_TASTING: 'wine-tasting',
    COOKING_CLASS: 'cooking-class',
    EXCLUSIVE_DINING: 'exclusive-dining',
  };
  
  // Review interface
  export class Review {
    constructor(id, userId, userName, userImage, rating, comment, date, verified) {
      this.id = id;
      this.userId = userId;
      this.userName = userName;
      this.userImage = userImage;
      this.rating = rating;
      this.comment = comment;
      this.date = date;
      this.verified = verified;
    }
  }
  
  // User interface
  export class User {
    constructor(id, name, email, profileImage, bookings, savedEvents, preferences) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.profileImage = profileImage;
      this.bookings = bookings; // Array of Booking objects
      this.savedEvents = savedEvents; // Array of Event IDs
      this.preferences = preferences; // { categories, locations, priceRange }
    }
  }
  
  // Host interface
  export class Host extends User {
    constructor(
      id,
      name,
      email,
      profileImage,
      bookings,
      savedEvents,
      preferences,
      events,
      rating,
      verified,
      totalRevenue,
      analytics
    ) {
      super(id, name, email, profileImage, bookings, savedEvents, preferences);
      this.events = events; // Array of Event objects
      this.rating = rating;
      this.verified = verified;
      this.totalRevenue = totalRevenue;
      this.analytics = analytics; // { totalBookings, averageRating, popularEvents }
    }
  }
  
  // Booking interface
  export class Booking {
    constructor(
      id,
      eventId,
      userId,
      status,
      paymentStatus,
      bookingDate,
      attendees,
      totalAmount,
      customizations
    ) {
      this.id = id;
      this.eventId = eventId;
      this.userId = userId;
      this.status = status; // 'confirmed' | 'pending' | 'cancelled'
      this.paymentStatus = paymentStatus; // 'paid' | 'pending' | 'refunded'
      this.bookingDate = bookingDate;
      this.attendees = attendees;
      this.totalAmount = totalAmount;
      this.customizations = customizations; // Optional
    }
  }